<?php
// api/articles.php
header('Content-Type: application/json');
require_once '../config.php';

$stmt = $pdo->query("SELECT * FROM articles ORDER BY created_at DESC");
$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($articles);
?>