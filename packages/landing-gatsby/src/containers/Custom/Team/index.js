import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Link from "reusecore/src/elements/Link";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import TeamSectionWrapper from "./team.style";

const TeamSection = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  teamTitle,
  teamMeta,
  team
}) => {
  return (
    <TeamSectionWrapper id="teamSection">
      <Container>
        <Box className="row" {...row}>
          {team.map(({ node }) => {
            return (
              <FeatureBlock
                className="team__post"
                icon={
                  <Img
                    resolutions={node.localFile.childImageSharp.resolutions}
                    key={node.localFile.childImageSharp.resolutions.src}
                  />
                }
                title={<Link {...teamTitle}>{node.alt_text}</Link>}
                description={
                  <Text
                    content={
                      <p
                        className="card-text"
                        dangerouslySetInnerHTML={{ __html: node.caption }}
                      ></p>
                    }
                    {...teamMeta}
                  />
                }
              />
            );
          })}

          {/* <FeatureBlock
            className="team__post"
            icon={
              <Image
                src={bannerImg}
                alt={`Team Image`}
                objectFit="cover"
                className="team__image"
              />
            }
            title={<Link {...teamTitle}>Post Title - 2</Link>}
            description={<Text content="Sub title - 2" {...teamMeta} />}
          />

          <FeatureBlock
            className="team__post"
            icon={
              <Image
                src={bannerImg}
                alt={`Team Image`}
                objectFit="cover"
                className="team__image"
              />
            }
            title={<Link {...teamTitle}>Post Title - 3</Link>}
            description={<Text content="Sub title - 3" {...teamMeta} />}
          /> */}
        </Box>
      </Container>
    </TeamSectionWrapper>
  );
};

// TeamSection style props
TeamSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  teamTitle: PropTypes.object,
  teamMeta: PropTypes.object,
  team: PropTypes.array
};

// TeamSection default style
TeamSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"]
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  },
  // Team post row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-12px",
    mr: "-12px"
  },
  // Team post title default style
  teamTitle: {
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: "1.5",
    mb: "10px",
    letterSpacing: "-0.020em"
  },
  // Team post description default style
  teamMeta: {
    fontSize: "16px",
    lineHeight: "1",
    color: "rgba(255, 255, 255, 0.5)",
    mb: 0
  }
};

export default TeamSection;
