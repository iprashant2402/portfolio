// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styles from "./home.module.css"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import Header from "../components/header"
import projects from "../../content/projects.json"
import ReadMoreReact from "read-more-react"

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="page-1" className={`container-fluid ${styles.home_background}`}>
        <div className={`row ${styles.home_title}`}>
          <h1>
            HI, I AM <span className={styles.secondary_text}>PRASHANT.</span>{" "}
            <span className={styles.cursor}>|</span>
          </h1>
        </div>
        <div className={`row ${styles.card_wrapper}`}>
          <div className={`col col-md-4 ${styles.card}`}>
            <p>
              <i>
                "A full-stack software engineer, who focuses on writing clean,
                efficient & maintainable code, crafting elegant, user-friendly
                experiences."
              </i>
            </p>
          </div>
        </div>
        <div className={`row ${styles.footer}`}>
          <AnchorLink to="/#page-2" className={styles.btn} title="View my work">
            View Projects
          </AnchorLink>
        </div>
      </div>

      {/* PROJECTS PAGE STARTS HERE */}

      <div
        id="page-2"
        className={`container-fluid ${styles.projects_container}`}
      >
        <div className={`row ${styles.title}`}>
          <h1>MY PROJECTS</h1>
        </div>
        <div className="row">
          {projects.map((l, i) =>
            l.github_url.length > 0 ? (
              <div className={`col-md-4 col-lg-4 col-xs-12 col-sm-12`} key={i}>
                <div className={`${styles.project_card}`}>
                  <div className={styles.project_card_container}>
                    <h5 className={styles.card_title}>
                      {l.title.toLocaleUpperCase()}
                    </h5>
                    <ReadMoreReact
                      text={l.description}
                      className={styles.card_para}
                    />
                    <h6 className={styles.card_title}>TAGS -</h6>
                    {l.tags.map((t, j) => (
                      <span key={j} className={`rounded ${styles.tags}`}>
                        {t}
                      </span>
                    ))}
                    <div className={`${styles.card_footer}`}>
                      <a
                        href={l.github_url[0]}
                        target="blank"
                        className={`foot_btn ${styles.github_btn}`}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        &nbsp; Github
                      </a>
                      {l.demo_link.length > 0 ? (
                        <a
                          href={l.demo_link}
                          target="blank"
                          className={`foot_btn ${styles.demo_btn}`}
                        >
                          View Demo
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* WORK EXPERIENCE PAGE STARTS HERE */}

      <div id="page-3" className={`container-fluid ${styles.work_container}`}>
        <div className={`row ${styles.title}`}>
          <h1>Where have I worked at?</h1>
        </div>

        <div className={styles.timeline}>
          <div className={`${styles.sf_container} ${styles.left}`}>
            <div className={styles.content}>
              <h4 className={styles.card_title}>HealthOnRent</h4>
              <h6>Full Stack Engineer</h6>
              <p>March, 2020 - Present</p>
            </div>
          </div>
          <div className={`${styles.sf_container} ${styles.right}`}>
            <div className={styles.content}>
              <h4 className={styles.card_title}>Doorzy</h4>
              <h6>Full Stack Engineer</h6>
              <p>September, 2019 - February, 2020</p>
            </div>
          </div>
          <div className={`${styles.sf_container} ${styles.left}`}>
            <div className={styles.content}>
              <h4 className={styles.card_title}>Tata Consultancy Services</h4>
              <h6>Software Engineer, Intern</h6>
              <p>May, 2018 - June, 2018</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT PAGE */}

      <div
        id="page-4"
        className={`container-fluid ${styles.contact_container}`}
      >
        <div className={`row ${styles.title}`}>
          <h1>You can reach me at:</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 offset-md-4 offset-lg-4">
            <div className={`${styles.contact_card}`}>
              <div
                className={`${styles.project_card_container} justify-center`}
              >
                <p className={styles.contact_para}>
                  <FontAwesomeIcon icon={faMailBulk} />
                  &nbsp;&nbsp;iprashant2402@gmail.com
                </p>
                <p className={styles.contact_para}>
                  <FontAwesomeIcon icon={faLinkedin} />
                  &nbsp;&nbsp;
                  <a
                    href="https://www.linkedin.com/in/prashant-singh-a51574123"
                    target="blank"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                <p className={styles.contact_para}>
                  <FontAwesomeIcon icon={faGithub} />
                  &nbsp;&nbsp;
                  <a href="https://github.com/iprashant2402" target="blank">
                    Github Profile
                  </a>
                </p>
                <p className={styles.contact_para}>
                  <FontAwesomeIcon icon={faMedium} />
                  &nbsp;&nbsp;
                  <a
                    href="https://medium.com/@iprashant2402"
                    target="blank"
                  >
                    Medium Blog
                  </a>
                </p>
                <p className={styles.contact_para}>
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp;&nbsp;+91-9944777014
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={` ${styles.base_footer} col-lg-4 col-md-4 col-xs-12 col-sm-12 offset-md-4 offset-lg-4`}>
            <p className={styles.footer_para}>
              Made with&nbsp;&nbsp;
              <FontAwesomeIcon className="heart" icon={faHeart} />
              &nbsp;
              by Prashant Singh.
            </p>
          </div>
      </div>
    </>
  )
}

export default HomePage
