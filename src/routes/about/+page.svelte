<svelte:head>
    <title>About me</title>
</svelte:head>

<header>
    <h1>About me</h1>
    <nav>
        <button class="button" onclick="location.href='/'">Main Page</button>
    </nav>
</header>

<main>
    <div class="image-container">
        <a href="/" class="circle"
            ><img src="/images/IMG_6500.JPG" alt="something" /></a
        >
    </div>

    <h1 style="margin: 20px">
        Hi! <strong>My name is Daniil Prostiruk.</strong><br /> I am a first-year
        bachelor student of Innopolis University and drummer in music band "Mango
        Tea". Also, I am a professional ballroom dancer. I have a lot of hobbies
        such as playing the guitar and the trumpet.
    </h1>
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
