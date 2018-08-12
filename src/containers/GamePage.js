import React from 'react';
import Game from '../components/Game';
import {changeCardColor} from '../store/actions';
import { connect } from 'react-redux';
const GamePage = ({cards, changeCardColor}) => (<Game cards={cards} changeCardColor={changeCardColor}/>);
const mapStateToProps = state => ({cards: state.cards});
const mapDispatchToProps = dispatch => ({changeCardColor: (id, color) => dispatch(changeCardColor(id, color))});
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

