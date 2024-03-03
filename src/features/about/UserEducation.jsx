import React from "react";
import styled from "styled-components";

function UserEducation() {
  return (
    <UserEducStyled>
      <div>
        <SectionTitle>HackerRank Certifications:</SectionTitle>
        <ul>
          <CertificationItem>
            ● React (Basic) :
            <Button>
              <a
                target="_blank"
                href="https://www.hackerrank.com/certificates/3f42bfe6c83c"
                rel="noreferrer"
              >
                View Certification
              </a>
            </Button>
          </CertificationItem>
          <CertificationItem>
            ● JavaScript (Advanced) :
            <Button>
              <a
                target="_blank"
                href="https://www.hackerrank.com/certificates/94770bb21d10"
                rel="noreferrer"
              >
                View Certification
              </a>
            </Button>
          </CertificationItem>
          <CertificationItem>
            ● JavaScript (Basic) :
            <Button>
              <a
                target="_blank"
                href="https://www.hackerrank.com/certificates/7698d1588e64"
                rel="noreferrer"
              >
                View Certification
              </a>
            </Button>
          </CertificationItem>
          <CertificationItem>
            ● CSS :
            <Button>
              <a
                target="_blank"
                href="https://www.hackerrank.com/certificates/8ba54812023a"
                rel="noreferrer"
              >
                View Certification
              </a>
            </Button>
          </CertificationItem>
        </ul>
      </div>
      <CourseContainer>
        <SectionTitle>Udemy Courses:</SectionTitle>
        <ul>
          <CertificationItem>
            <CourseLink
              target="_blank"
              href="https://www.udemy.com/course/the-ultimate-react-course/"
              rel="noreferrer"
            >
              The Ultimate React Course 2023: React, Redux & More
            </CourseLink>
            {"by "}
            <AutorLinks
              target="_blank"
              href="https://www.udemy.com/user/jonasschmedtmann/"
              rel="noreferrer"
            >
              Jonas Schmedtmann :<br />
            </AutorLinks>
            Mastering the React ecosystem comprehensively, from basics to
            advanced state management using Redux. Build powerful and scalable
            web applications with React, honing your skills in modern front-end
            development.
          </CertificationItem>
          <CertificationItem>
            <CourseLink
              target="_blank"
              href="https://www.udemy.com/course/react-redux/"
              rel="noreferrer"
            >
              Modern React with Redux [2023 Update]
            </CourseLink>
            {"by "}
            <AutorLinks
              target="_blank"
              href="https://www.udemy.com/user/sgslo/"
              rel="noreferrer"
            >
              Stephen Grider : <br />
            </AutorLinks>
            Delve into React and Redux, mastering the art of building scalable
            and efficient single-page applications. Gain practical experience
            through hands-on projects, learning industry best practices and
            solidifying your expertise in modern web development.
          </CertificationItem>
          <CertificationItem>
            <CourseLink
              target="_blank"
              href="https://www.udemy.com/course/the-complete-javascript-course/"
              rel="noreferrer"
            >
              The Complete JavaScript Course 2023: From Zero to Expert!
            </CourseLink>
            {"by "}
            <AutorLinks
              target="_blank"
              href="https://www.udemy.com/user/jonasschmedtmann/"
              rel="noreferrer"
            >
              Jonas Schmedtmann :<br />
            </AutorLinks>
            This is the biggest and the important course that I learned in my
            life, achieve JavaScript mastery, from foundational concepts to
            advanced topics. Develop dynamic web applications with hands-on
            projects, enhancing my proficiency in one of the most essential
            languages for web development.
          </CertificationItem>
          <CertificationItem>
            <CourseLink
              target="_blank"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              rel="noreferrer"
            >
              Advanced CSS and Sass: Flexbox, Grid, Animations and More!
            </CourseLink>
            {"by "}
            <AutorLinks
              target="_blank"
              href="https://www.udemy.com/user/jonasschmedtmann/"
              rel="noreferrer"
            >
              Jonas Schmedtmann :<br />
            </AutorLinks>
            Elevate my CSS expertise with advanced concepts like Flexbox, Grid,
            and animations. Dive into Sass to streamline my stylesheets, gaining
            the tools to create sophisticated and visually appealing web
            designs.
          </CertificationItem>
          <CertificationItem>
            <CourseLink
              target="_blank"
              href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
              rel="noreferrer"
            >
              Build Responsive Real-World Websites with HTML and CSS
            </CourseLink>
            {"by "}
            <AutorLinks
              target="_blank"
              href="https://www.udemy.com/user/jonasschmedtmann/"
              rel="noreferrer"
            >
              Jonas Schmedtmann :<br />
            </AutorLinks>
            Master the essentials of HTML and CSS, creating dynamic and
            responsive web pages. Learn modern design techniques to build
            user-friendly websites, enhancing your skills in front-end
            development.
          </CertificationItem>
        </ul>
      </CourseContainer>
    </UserEducStyled>
  );
}

const UserEducStyled = styled.div`
  background-color: var(--color-primary-2);
  margin-top: 20px;
  a {
    margin-right: 1rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin: 2rem 0;
  color: var(--color-white);
  opacity: 0.8;
`;

const CertificationItem = styled.li`
  margin-bottom: 1rem;
  /* display: flex;
  align-items: center;
  gap: 1rem; */
`;

const CourseContainer = styled.div`
  li {
    margin-bottom: 2rem;
  }
`;

const CourseLink = styled.a`
  position: relative;
  color: #3c9d93;
  &:hover {
    color: #43d9ad;
  }
  &::before {
    content: "●";
    position: absolute;
    top: 0;
    left: -1.5rem;
  }
`;

const AutorLinks = styled.a`
  color: #c0776d;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #faa195;
  }
`;

const Button = styled.button`
  font-size: 12px;
  font-weight: 200;
  padding: 5px 20px;
  margin-left: 1rem;
  border-radius: 20px;
  color: #fea55f;
  background-color: transparent;
  border: 1px solid #fea55f;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #01080e;
    background-color: #fea55f;
  }
`;

export default UserEducation;
