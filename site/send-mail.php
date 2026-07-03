<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

// Honeypot anti-spam
if (!empty($_POST['_honey'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$nom     = trim($_POST['nom'] ?? '');
$email   = trim($_POST['email'] ?? '');
$tel     = trim($_POST['telephone'] ?? '');
$service = trim($_POST['service'] ?? '');
$msg     = trim($_POST['message'] ?? '');

if ($nom === '' || $email === '' || $msg === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Champs obligatoires manquants']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Adresse e-mail invalide']);
    exit;
}

$to = 'vincentpro81110@gmail.com';
$subject = 'Nouvelle demande de devis — tms81.fr';

$body  = "Nouveau message depuis tms81.fr\n";
$body .= "══════════════════════════════════\n\n";
$body .= "Nom : $nom\n";
$body .= "E-mail : $email\n";
if ($tel !== '') $body .= "Téléphone : $tel\n";
if ($service !== '') $body .= "Service : $service\n";
$body .= "\nProjet :\n$msg\n";
$body .= "\n——\nEnvoyé depuis le formulaire tms81.fr";

$headers  = "From: tms81.fr <noreply@tms81.fr>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: tms81.fr";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Erreur serveur']);
}
