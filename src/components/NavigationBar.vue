<template>
  <!-- ナビゲーションバー -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- タイトル -->
    <a class="navbar-brand" href="/main">FreesPod</a>

    <!-- 画面サイズに応じて折りたたむ -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- メニュー全体 -->
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav">

        <!-- ToDo Memoへのリンク -->
        <li class="nav-item">
          <a class="nav-link" href="/main"><i class="fas fa-clipboard-list"></i> ToDoメモ</a>
        </li>

        <!-- ストップウォッチへのリンク -->
        <li class="nav-item">
          <a class="nav-link" href="/timer"><i class="fas fa-stopwatch"></i> ストップウォッチ</a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.navigation-bar {
  height: 60px;
}
</style>