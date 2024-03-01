import styled from "styled-components";
import { MdViewInAr } from "react-icons/md";
import { RiCheckFill, RiCloseLine, RiCodeSSlashFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineArrowBack } from "react-icons/md";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "../../ui/Button";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const ModalProject = ({ onCloseModal, content }) => {
  const {
    id,
    title,
    images,
    live_link,
    github_link,
    details,
    technologies,
    features,
  } = content;
  const ref = useOutsideClick(onCloseModal);

  const imageReadyToView = images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <ModalContainer>
      <ContentContainer>
        <div ref={ref}>
          <ModelHeader>
            <CloseButton onClick={() => onCloseModal(false)}>
              <MdOutlineArrowBack size={25} />
            </CloseButton>
            <ProjectTitle>
              {`Project ${id} `} <span>{`// ${title}`}</span>
            </ProjectTitle>
            <CloseButton onClick={() => onCloseModal(false)}>
              <RiCloseLine size={30} />
            </CloseButton>
          </ModelHeader>
          <ImageGalleryWrapper>
            <ReactImageGallery items={imageReadyToView} showNav={false} />
          </ImageGalleryWrapper>
          <DetailsContainer>
            <Title>Details:</Title>
            <p>{details}</p>
            <Title>Technologies:</Title>
            <ListRow>
              {technologies?.map((technology, index) => (
                <li key={index}>
                  <RxDotFilled /> {technology}
                </li>
              ))}
            </ListRow>
            <Title>Features:</Title>
            <ul>
              {features?.map((feature, index) => (
                <li key={index}>
                  <RiCheckFill /> {feature}
                </li>
              ))}
            </ul>
            <Buttons>
              <Button
                variation="default"
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a href={github_link} target="_blank" rel="noopener noreferrer">
                  <MdViewInAr size={24} /> preview
                </a>
              </Button>
              <Button variation="default">
                <a href={github_link} target="_blank" rel="noopener noreferrer">
                  <RiCodeSSlashFill size={24} /> view-code
                </a>
              </Button>
            </Buttons>
          </DetailsContainer>
        </div>
      </ContentContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-color: rgba(31, 41, 55, 0.7);
  @media only screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;

const ModelHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  background-color: rgba(1, 22, 39, 0.9);
  justify-content: space-between;
  padding: 0 1rem;
`;
const CloseButton = styled.span`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fea55f;
  border: 2px solid #1e2d3d;
  border-radius: 50%;
`;

const ContentContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  max-width: 100rem;
  line-height: 1.4;
  margin: 0 auto;
  height: 100%;
  border: 1px solid var(--color-lines);
  background-color: var(--color-primary-3);
  border-radius: 1rem;
  overflow: auto;
`;

const ProjectTitle = styled.p`
  margin: 1rem 0;
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-purple-1);
  span {
    font-weight: 300;
    color: var(--color-grey-1);
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const ImageGalleryWrapper = styled.figure`
  border-top: 1px solid #1e2d3d;
  border-bottom: 1px solid #1e2d3d;
`;

const DetailsContainer = styled.div`
  padding: 3rem;
  @media only screen and (max-width: 1024px) {
    padding: 2rem;
  }
`;

const Title = styled.h3`
  margin: 1rem 0;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--color-purple-1);
`;

const ListRow = styled.ul`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Buttons = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export default ModalProject;
