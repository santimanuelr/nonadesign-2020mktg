import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';

const ServicesSection = ({
  inputdata,	
  sectionWrapper,
  row,
  col,
  col2,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
  paramItemHeading,
  paramItemDes,
  featureBlockStyle,
  iconStyle,
  contentStyle,
  contentParamStyle,
}) => {
  
  return (
    <Box {...sectionWrapper}>
      <Container>
        <>
          <Box {...row}>            
              <Box {...col2}>
			    <Fade up delay={100}>
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
					  {...featureItemHeading}
                      content={inputdata.about_heading}
                    />
                  }
                />
				</Fade>
				
				<Fade up delay={200}>
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  description={
                    <Text
					  {...featureItemDes}
                      content={inputdata.about_link_title}
                    />
                  }
                />
				</Fade>
              </Box>
              <Box {...col}>
			    <Fade up delay={100}>
				<FeatureBlock
				  wrapperStyle={featureBlockStyle}
				  iconStyle={iconStyle}
				  contentStyle={contentParamStyle}
				  title={
					<Text {...paramItemHeading} content={inputdata.about_parameter1_value} />
				  }
				  description={
					<Text {...paramItemDes} content={inputdata.about_parameter1_name} />
				  }
				/>
				</Fade>

				<Fade up delay={200}>
				<FeatureBlock
				  wrapperStyle={featureBlockStyle}
				  iconStyle={iconStyle}
				  contentStyle={contentParamStyle}
				  title={
					<Text {...paramItemHeading} content={inputdata.about_parameter2_value} />
				  }
				  description={
					<Text {...paramItemDes} content={inputdata.about_parameter2_name} />
				  }
				/>
				</Fade>
              </Box>
            
          </Box>
        </>
      </Container>
    </Box>
  );
};

ServicesSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
  paramItemHeading: PropTypes.object,
  paramItemDes: PropTypes.object,
  featureBlockStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

ServicesSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'service_section',
    className: 'service_section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    pl: ['5px', '15px', '30px', '125px'],
    pr: ['5px', '15px', '30px', '125px'],
  },
  secTitleWrapper: {
    mb: ['50px', '60px', '60px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    className: 'service_col',
    bg: '#fff',
  },
  col2: {
    width: [1, 1 / 2, 1 / 2, 2 / 3],
    className: 'service_2col',
    bg: '#fff',
  },
  featureBlockStyle: {
    p: '45px 55px',
    className: 'service_item',
  },
  iconStyle: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    mb: '45px',
  },
  contentStyle: {
    textAlign: 'left',
  },
  contentParamStyle: {
    textAlign: 'center',
  },
  featureItemHeading: {
    fontSize: ['30px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '45px',
    mb: '20px',
    letterSpacing: '-1.15px',
  },
  featureItemDes: {
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.15px',
    color: '#343d48cc',
    mb: '0',
  },
  paramItemHeading: {
    fontSize: '72px',
    fontWeight: '900',
    color: '#0f2137',
    lineHeight: '1',
    letterSpacing: '-0.03430556em',
  },
  paramItemDes: {
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '-0.87px',
    color: '#343d48cc',
    marginTop: '5px',
	marginBottom: '-20px',
  },
};

export default ServicesSection;
