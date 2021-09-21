import React from "react";

function NavTab () {
    return(
        <ul className='navTab'>
            <li className="navTab__item"><a href='#about' className='link'>О проекте</a></li>
            <li className="navTab__item"><a href='#stack' className='link'>Технологии</a></li>
            <li className="navTab__item"><a href='#about-me' className='link'>Студент</a></li>
        </ul>
    )
}

export default NavTab