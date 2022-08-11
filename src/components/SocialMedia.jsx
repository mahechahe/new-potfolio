import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

export const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/estiven-mahecha-henao-827880217/" target="_blank" rel="noreferrer">
              <BsLinkedin/>
            </a>
        </div>
        <div>
            <a href="https://github.com/mahechahe" target="_blank" rel="noreferrer">
              <BsGithub/>
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/estiven_mahechah/" target="_blank" rel="noreferrer">
              <BsInstagram/>
            </a>
        </div>
    </div>
  )
}
