<!--Done by Samarth Nehe-->
<?php
    $username=$_POST['username'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $address1=$_POST['address1'];
    $subj=$_POST['subj'];
    $mess=$_POST['mess'];
    
    if (!empty($username) && !empty($phone) && !empty($email) && !empty($address1) && !empty($subj) && !empty($mess )  ){
        $host="localhost";
        $dbUsername="root";
        $dbPassword="";
        $dbname="newdb";

        $conn=new mysqli($host,$dbUsername,$dbPassword,$dbname);
        if(mysqli_connect_error()){
            die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
        }
        else{
            $SELECT="SELECT email FROM register Where email=? Limit 1";
            $INSERT = "INSERT Into register (username,phone,email,address1,subj,mess)values(?,?,?,?,?,?)";

            $stmt=$conn->prepare($SELECT);
            $stmt->bind_param("s",$email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $rnum=$stmt->num_rows;

            if($rnum==0){
                $stmt->close();
                $stmt=$conn->prepare($INSERT);
                $stmt->bind_param("sissss",$username,$phone,$email,$address1,$subj,$mess);
                $stmt->execute();
                echo "Your message has been sent!!";
            }else{
                echo "email already already exists!";
            }
            $stmt->close();
            $conn->close();
        }
        
    }else{
        echo "All feilds required";
    }
?>