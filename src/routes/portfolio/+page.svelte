<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<header>
    <h1>My Portfolio</h1>
    <nav>
        <button class="button" onclick="location.href='/'">Main Page</button>
    </nav>
</header>



<main>
    <h1>
        I have experience in front- and backend development. Django, DB, Telegram and Discord bots creation.
    </h1>
</main>

<footer class="footer">
    <div class="footer__addr">

        <h2>Contact</h2>

        <address>
            Innopolis, Tatarstan Republic, Russia<br>

            <a class="footer__btn" href="mailto:daniil.prostiruk@gmail.com">Email Me</a>
        </address>
    </div>

    <ul class="footer__nav">
        <li class="nav__item"></li>

        <li class="nav__item"></li>

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