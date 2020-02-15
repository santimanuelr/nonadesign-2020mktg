import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Heading from "reusecore/src/elements/Heading";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import ServiceItemsWrapper from "./serviceItems.style";

const ServiceItems = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
  items
}) => {
  return (
    <ServiceItemsWrapper id="ServiceItems">
      <Container>
        {/* <Box {...sectionHeader}>
          <Text content="OUR SERVICES" {...sectionSubTitle} />
          <Heading
            content="Featured Service that We Provide"
            {...sectionTitle}
          />
        </Box> */}
        <Box className="row" {...row}>
          {items.map(({ node, index }) => (
            <Box className="col" {...col} key={`feature-${index}`}>
              <FeatureBlock
                icon={
                  <Img
                    resolutions={node.localFile.childImageSharp.resolutions}
                    key={node.localFile.childImageSharp.resolutions.src}
                  />
                }
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={node.alt_text} {...featureTitle} />}
                // description={
                //   <Text content={feature.description} {...featureDescription} />
                // }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </ServiceItemsWrapper>
  );
};

// ServiceItems style props
ServiceItems.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
  items: PropTypes.array
};

// ServiceItems default style
ServiceItems.defaultProps = {
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
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    borderLeft: "1px solid #f1f4f6",
    borderBottom: "1px solid #f1f4f6"
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "30px", "32px"]
  },
  // feature icon default style
  iconStyle: {
    width: "100px",
    height: "100px",
    m: "0 auto",
    borderRadius: "50%",
    bg: "#93d26e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    color: "#ffffff",
    overflow: "hidden",
    mb: "12px"
  },
  // feature content default style
  contentStyle: {
    textAlign: "center"
  },
  // feature title default style
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "20px"],
    letterSpacing: "-0.020em"
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#343d48cc"
  }
};

export default ServiceItems;
