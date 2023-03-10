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
import { SvgIcon } from '@mui/material';
import ArrowImage from 'src/assets/images/Stat5_arrow_1.png';
import Arrow1Image from 'src/assets/images/Stat5_Arrow.png';
import { ReactComponent as DateRangeFilled1 } from 'src/assets/images/_DateRangeFilled.svg';
import { styled } from '@mui/material/styles';

const TypeQuest = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.15)`,
  borderRadius: `25px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `12px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
});

const Row = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Left = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Icon1 = styled('div')({
  backgroundColor: `rgba(209, 228, 255, 1)`,
  borderRadius: `18px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `56px`,
  height: `56px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Icon2 = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette['Primary']['Light'],
  width: `34px`,
  height: `34px`,
  margin: `0px`,
}));

const Stats = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 10px`,
});

const Top = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const CalendarViews = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: theme.palette['Text']['Secondary'],
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const Percent = styled('div')({
  borderRadius: `50px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `50px`,
  height: `21px`,
  margin: `0px 0px 0px 10px`,
});

const Frame1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px 5px`,
  boxSizing: `border-box`,
  height: `24px`,
  margin: `0px`,
});

const Arrow = styled('img')({
  height: `10px`,
  width: `9px`,
  margin: `0px`,
});

const Text = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `3px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Q154 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: theme.palette['Green']['A700'],
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const Q97235 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `900`,
  fontSize: `26px`,
  letterSpacing: `0.26px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const RightSide = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px 10px 0px 0px`,
  boxSizing: `border-box`,
});

const Arrow1 = styled('img')({
  height: `14px`,
  width: `7px`,
  margin: `0px`,
});

function Stat5(props) {
  return (
    <TypeQuest>
      <Row>
        <Left>
          <Icon1>
            <Icon2 fontSize={'small'} component={DateRangeFilled1} />
          </Icon1>
          <Stats>
            <Top>
              <CalendarViews>{`Calendar Views`}</CalendarViews>
              <Percent>
                <Frame1>
                  <Arrow src={ArrowImage} loading="lazy" alt={'arrow'} />
                  <Text>
                    <Q154>{`15.4%`}</Q154>
                  </Text>
                </Frame1>
              </Percent>
            </Top>
            <Q97235>{`97,235`}</Q97235>
          </Stats>
        </Left>
        <RightSide>
          <Arrow1 src={Arrow1Image} loading="lazy" alt={'Arrow'} />
        </RightSide>
      </Row>
    </TypeQuest>
  );
}

export default Stat5;
