import React, { Component } from 'react'
import { Link } from 'gatsby'

import logo from '../../../images/logo.png'
import github from '../../../../static/github.svg'
import twitter from '../../../../static/twitter.svg'
import linkedin from '../../../../static/linkedin.svg'
import rss from '../../../../static/rss.svg'

export default class Header extends Component {
  render() {
    return (
      <header
        style={{
          position: 'fixed',
          borderBottom: '1px solid #0275d8',
          backgroundColor: 'rgba(255,255,255,0.925)',
          height: '3.5rem',
          zIndex: '3',
          left: '0',
          right: '0',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            paddingLeft: '1.05rem',
            paddingRight: '1.05rem',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Link
            to="/"
            style={{
              color: '#0275d8',
              textDecoration: 'none',
              marginRight: '.7rem',
            }}
          >
            <h1
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: 0,
                fontSize: '1rem',
              }}
            >
              <img
                src={logo}
                alt="Georgi Yanev's blog"
                style={{
                  height: '2.25rem',
                  marginBottom: '0',
                  marginRight: '.5rem',
                }}
              />
              Georgi Yanev
            </h1>
          </Link>

          <ul className="nav">
            <li>
              <Link to="/news/">Blog posts</Link>
            </li>
            <li>
              <Link to="/extras/fpv-videos/">Videos</Link>
            </li>
            <li>
              <a href="https://www.georgi-yanev.com">About</a>
            </li>
          </ul>
          <ul className="nav social">
            <li>
              <a
                href="https://github.com/jumpalottahigh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jumpalottahigh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yanevgeorgi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="/feed.xml">
                <img src={rss} alt="Subscribe to RSS feed" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
