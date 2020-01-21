<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'pess.by'; // Логин на почте
    $mail->Password   = '375172058475'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('pess.by@gmail.com', 'pess.by'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('alina.kala4ik@yandex.ru');

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);

        $mail->Subject = 'pess.by';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Почта:</b> $email<br><br>
        <b>Телефон:</b> $phone<br><br>
        <b>Сообщение:</b><br>$text";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
