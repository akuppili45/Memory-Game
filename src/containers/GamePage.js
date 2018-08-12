import React from 'react';
import Game from '../components/Game';
import { connect } from 'react-redux';
const GamePage = ({cards}) => (<Game cards={cards}/>);
const mapStateToProps = state => ({cards: state.cards});
export default connect(mapStateToProps)(GamePage);

