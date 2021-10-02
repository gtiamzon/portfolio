import '../Nav/NavBar.css'

const NavBar = () => {

    return (
    <nav>
      <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
      <ul>
        <li><a href="#about">HOME</a></li>
        <li><a href="#gallery">ABOUT ME</a></li>
        <li><a href="blog.html">TECH STACK</a></li>
        <li><a href="#contact">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
    );
  }

export default NavBar