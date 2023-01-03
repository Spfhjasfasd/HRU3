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
import { styled } from '@mui/material/styles';
import Navbar2 from 'src/components/Navbar2/Navbar2';
import useWelcome from 'src/components/Welcome/useWelcome';

const ScreenDesktop = styled('div')({
  backgroundColor: `rgba(191, 38, 158, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `782.5px`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  width: '100%',
});

const Navbar21 = styled(Navbar2, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  height: data.size === 'mobile' ? 'unset' : `60px`,
  width: data.size === 'mobile' ? `396px` : `1440px`,
  margin: `0px`,
}));

const Hrucoin = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nova Round`,
  fontWeight: `400`,
  fontSize: data.size === 'mobile' ? `40px` : `96px`,
  letterSpacing: data.size === 'mobile' ? `-2px` : `-4.8px`,
  textDecoration: `none`,
  lineHeight: `62px`,
  textTransform: `none`,
  margin: data.size === 'mobile' ? `70px 0px 0px 0px` : `90px 0px 0px 0px`,
}));

const Button1 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundColor: `rgba(123, 97, 255, 1)`,
  boxShadow: `0px 6px 7px rgba(123, 97, 255, 0.3)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `14px 50px`,
  boxSizing: `border-box`,
  margin: data.size === 'mobile' ? `70px 0px 0px 0px` : `90px 0px 0px 0px`,
}));

const LearnMore = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0.96px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const Q1 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Nova Round`,
  fontWeight: `400`,
  fontSize: data.size === 'mobile' ? `16px` : `32px`,
  letterSpacing: data.size === 'mobile' ? `-0.8px` : `-1.6px`,
  textDecoration: `none`,
  lineHeight: `62px`,
  textTransform: `none`,
  margin: data.size === 'mobile' ? `70px 0px 0px 0px` : `90px 0px 0px 0px`,
  width: data.size === 'mobile' ? `289px` : 'unset',
}));

function Welcome(props) {
  const { data } = useWelcome();

  return (
    <ScreenDesktop>
      <Navbar21 data={data} />
      <Hrucoin data={data}>{`HRUCOIN`}</Hrucoin>
      <Button1 data={data}>
        <LearnMore>{`Learn More`}</LearnMore>
      </Button1>
      <Q1 data={data}>{`Innovating Blockchain Health Services`}</Q1>
    </ScreenDesktop>
  );
}

export default Welcome;
