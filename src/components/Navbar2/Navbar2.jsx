/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Button } from '@mui/material';
import Quest21Image from 'src/assets/images/Navbar2_Quest2_1.png';
import HamburgerImage from 'src/assets/images/Navbar2_Hamburger.png';
import { styled } from '@mui/material/styles';
import useNavbar2 from 'src/components/Navbar2/useNavbar2';

const ScreenDesktopTypeQue = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  backgroundColor: theme.palette['Background']['Paper'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: data.size === 'mobile' ? `40px` : `60px`,
  justifyContent: data.size === 'mobile' ? `flex-start` : `space-between`,
  alignItems: `flex-start`,
  padding: data.size === 'mobile' ? `2px 20px` : `6px 80px`,
  boxSizing: `border-box`,
}));

const Items = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: data.size === 'mobile' ? 'unset' : `1244px`,
  flexGrow: data.size === 'mobile' ? `1` : 'unset',
  margin: data.size === 'mobile' ? `0px` : 'unset',
}));

const Frame1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Quest21 = styled('img', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  height: data.size === 'mobile' ? `18px` : `23px`,
  width: data.size === 'mobile' ? `74px` : `92px`,
  objectFit: `contain`,
  margin: `0px`,
}));

const MenuStructure = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `36px`,
});

const Items1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const AboutUs = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color:
    data.size === 'mobile'
      ? `rgba(255, 255, 255, 1)`
      : theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: data.size === 'mobile' ? `400` : `500`,
  fontSize: `12px`,
  letterSpacing: `1.2px`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  margin: `0px`,
}));

const OurTeam = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color:
    data.size === 'mobile'
      ? `rgba(255, 255, 255, 1)`
      : theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: data.size === 'mobile' ? `400` : `500`,
  fontSize: `12px`,
  letterSpacing: `1.2px`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  opacity: `0.6000000238418579`,
  margin: `0px 0px 0px 40px`,
}));

const Learn = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color:
    data.size === 'mobile'
      ? `rgba(255, 255, 255, 1)`
      : theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: data.size === 'mobile' ? `400` : `500`,
  fontSize: `12px`,
  letterSpacing: `1.2px`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  opacity: `0.6000000238418579`,
  margin: `0px 0px 0px 40px`,
}));

const Hamburger = styled('img')({
  height: `15px`,
  width: `21px`,
  margin: `0px 0px 0px 40px`,
});

const SignUp = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const LogIn = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color:
    data.size === 'mobile'
      ? `rgba(0, 0, 0, 1)`
      : theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `1.2px`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  opacity: `0.6000000238418579`,
  margin: `0px`,
}));

const ButtonContained = styled(Button)({
  margin: `0px 0px 0px 40px`,
});

function Navbar2(props) {
  const { data } = useNavbar2();

  return (
    <ScreenDesktopTypeQue data={data}>
      <Items data={data}>
        <Frame1>
          <Quest21
            data={data}
            src={Quest21Image}
            loading="lazy"
            alt={'Quest2 1'}
          />
        </Frame1>
        <MenuStructure>
          <Items1>
            <AboutUs data={data}>{`about us`}</AboutUs>
            <OurTeam data={data}>{`our team`}</OurTeam>
            <Learn data={data}>{`learn`}</Learn>
          </Items1>
          <Hamburger src={HamburgerImage} loading="lazy" alt={'Hamburger'} />
        </MenuStructure>
        <SignUp>
          <LogIn data={data}>{`LOG-in`}</LogIn>
          <ButtonContained variant="contained" size="small" color="secondary">
            {' '}
            SIGN-UP{' '}
          </ButtonContained>
        </SignUp>
      </Items>
    </ScreenDesktopTypeQue>
  );
}

export default Navbar2;
