<svelte:head>
    <title>Photos</title>
    <meta name="description" content="Photos of Daniil Prostiruk">
</svelte:head>

<header>
    <h1>Photos</h1>
    <nav>
        <button class="button" onclick="location.href='/'">Main Page</button>
    </nav>
</header>

<main>
    <img
        src="/images/photo_2023-06-10_10-01-40.jpg"
        style="width: 500px; height: auto; display: block; margin: 10px; display: inline-flex"
        alt="something"
    />
    <img
        src="/images/IMG_6500.JPG"
        style="width: 500px; height: auto; display: block; margin: 10px; display: inline-flex"
        alt="something"
    />
</main>

<footer class="footer">
    <div class="footer__addr">
        <h2>Contact</h2>

        <address>
            Innopolis, Tatarstan Republic, Russia<br />

            <a class="footer__btn" href="mailto:daniil.prostiruk@gmail.com"
                >Email Me</a
            >
        </address>
    </div>

    <ul class="footer__nav">
        <li class="nav__item" />

        <li class="nav__item" />

        <li class="nav__item">
            <h2 class="nav__title">Information</h2>

            <ul class="nav__ul">
                <li><a href="/about">About Me</a></li>

                <li><a href="/photos">View Photos</a></li>

                <li><a href="/portfolio">View Portfolio</a></li>
            </ul>
        </li>
    </ul>
</footer>
