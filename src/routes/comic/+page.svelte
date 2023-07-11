<head>
    <title>Comic</title>
    <script src="/dist/bundle.js"></script>

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
        }

        .comic-container {
            display: grid;
            grid-template-rows: auto auto auto;
            gap: 10px;
            text-align: center;
        }

        .comic-image {
            max-width: 100%;
            height: auto;
        }

        nav {
            height: 100%;
        }
    </style>



</head>

<nav>
    <button class="button" onclick="location.href='/'">Main Page</button>
</nav>

<div class="comic-container">
    <img class="comic-image" src="/images/Spinner-1s-200px.gif" alt="">
    <h1 class="comic-title"></h1>
    <p class="comic-date"></p>
    <p class="comic-ago"></p>
</div>

