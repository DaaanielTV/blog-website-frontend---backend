<?php
// edit_article.php
session_start();
require_once 'config.php';

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit;
}

$id = $_GET['id'] ?? '';
if (!$id) {
    header("Location: admin.php");
    exit;
}

$message = '';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = trim($_POST['title'] ?? '');
    $content = trim($_POST['content'] ?? '');

    if ($title && $content) {
        $stmt = $pdo->prepare("UPDATE articles SET title = ?, content = ? WHERE id = ?");
        if ($stmt->execute([$title, $content, $id])) {
            $message = "Artikel erfolgreich aktualisiert.";
        } else {
            $message = "Fehler beim Aktualisieren des Artikels.";
        }
    } else {
        $message = "Bitte sowohl einen Titel als auch Inhalt eingeben.";
    }
}

$stmt = $pdo->prepare("SELECT * FROM articles WHERE id = ?");
$stmt->execute([$id]);
$article = $stmt->fetch(PDO::FETCH_ASSOC);
if (!$article) {
    die("Artikel nicht gefunden!");
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Artikel bearbeiten</title>
</head>
<body>
    <h1>Artikel bearbeiten</h1>
    <?php if($message): ?>
        <p><?php echo $message; ?></p>
    <?php endif; ?>
    <form method="post" action="edit_article.php?id=<?php echo $id; ?>">
        <label>Titel: <input type="text" name="title" value="<?php echo htmlspecialchars($article['title']); ?>" required></label><br>
        <label>Inhalt:<br>
            <textarea name="content" rows="10" cols="50" required><?php echo htmlspecialchars($article['content']); ?></textarea>
        </label><br>
        <input type="submit" value="Aktualisieren">
    </form>
    <p><a href="admin.php">Zurück zum Admin-Bereich</a></p>
</body>
</html>