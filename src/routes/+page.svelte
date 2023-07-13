<svelte:head>
    <title>Daniil Prostiruk</title>
    <meta name="description" content="Portfolio of Daniil Prostiruk">
</svelte:head>

<header style="text-align: center; margin: 140px;">
    <h1>Hi! I am Daniil Prostiruk</h1>
    <nav>
        <button class="button" onclick="location.href='/about'">About Me</button
        >
        <button class="button" onclick="location.href='/photos'"
            >View Photos</button
        >
        <button class="button" onclick="location.href='/portfolio'"
            >View Portfolio</button
        >
        <button class="button" onclick="location.href='/contact'"
            >Contact Me</button
        >
        <button class="button" onclick="location.href='/comic'"
            >View Comic</button
        >
    </nav>
</header>

<main />

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
