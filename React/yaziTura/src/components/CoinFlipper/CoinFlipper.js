import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "",
      flipping: false,
      counter:0,
      turaCounter:0,
      yaziCounter:0
    };
  }
  
   
  
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    const random = parseInt(Math.random()*2);
    if(random === 0)
    {
      this.setState({side:"yazi"})
      this.setState({yaziCounter:this.state.yaziCounter+1});
    }
    else{
          this.setState({side:"tura"})
          this.setState({turaCounter:this.state.turaCounter+1});
         }
    
    this.setState({counter:this.state.counter+1});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.counter} </strong>
          atıştan
          <strong> {this.state.turaCounter} </strong>ü tura
          <strong> {this.state.yaziCounter} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
