 <?php
    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->Charset = 'utf-8';

    $fistName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $mail = $_POST['mail'];

    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'sendmail00@bk.ru'; // ваш логин от почты  с которой будут отправляться письма
    $mail->Userpassword = 'Hotkux-5habgi-kyvbux'; // ваш пароль от почты  с которой будут отправляться письма
    $mail->SMTPSecure = ss1;
    $mail->Port = 465;

    $mail->SetFrom('sendmail00@bk.ru'); // от кого будет уходить письмо?
    $mail->addAddress('cenehop156@tashjw.com'); // кому будет уходить письмо(дубль)?
    //
    $mail->isHMTL(true);

    $mail->Subject = 'Заявка с тестового сайта';
    $mail->Body = `$firstName . оставил заявку, его e-mail $email`;
    $mail->AltBody = '';

    if($mail->send()){
        echo 'Error';
    } else {
        // header('location: hello.html');
        echo 'Good';
    }
?>
