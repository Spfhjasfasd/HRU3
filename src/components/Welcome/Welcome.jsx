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

const ScreenDesktop = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundColor: `rgba(0, 0, 0, 0.2)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: data.size === 'mobile' ? `834px` : `731px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Navbar21 = styled(Navbar2, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  width: data.size === 'mobile' ? `396px` : `1440px`,
  height: data.size === 'mobile' ? 'unset' : `60px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const T1 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  position: `absolute`,
  left: data.size === 'mobile' ? `155px` : `552px`,
  top: data.size === 'mobile' ? `402px` : `410px`,
}));

function Welcome(props) {
  const { data } = useWelcome();

  return (
    <ScreenDesktop data={data}>
      <Navbar21 data={data} />
      <T1 data={data}>{data.size === 'mobile' ? `trasd` : `t1`}</T1>
    </ScreenDesktop>
  );
}

export default Welcome;
