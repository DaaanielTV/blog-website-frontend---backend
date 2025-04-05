<?php
// admin.php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit;
}
require_once 'config.php';

$stmt = $pdo->query("SELECT * FROM articles ORDER BY created_at DESC");
$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Admin Bereich</title>
</head>
<body>
    <h1>Admin Bereich</h1>
    <p><a href="logout.php">Logout</a></p>
    <h2>Artikel verwalten</h2>
    <p><a href="new_article.php">Neuer Artikel</a></p>
    <ul>
        <?php foreach($articles as $article): ?>
            <li>
                <?php echo htmlspecialchars($article['title']); ?>  
                (<a href="edit_article.php?id=<?php echo $article['id']; ?>">Bearbeiten</a> | 
                <a href="delete_article.php?id=<?php echo $article['id']; ?>" onclick="return confirm('Wirklich löschen?');">Löschen</a>)
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>