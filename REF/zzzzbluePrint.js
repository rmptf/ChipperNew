class Player {
  constructor() {
    // icons, buttons
    this.icons = icons(); // playerIcon, position, currentBetHand, currentBetRound
    {
      this.playerIcon = playerIcon;
      this.progressBar = progressBar;
      this.position = position; // dealer, bigBlind, smallBlind
      {
        this.dealer = dealer;
        this.bigBlind = bigBlind;
        this.smallBlind = smallBlind;
      }
      this.currentBetHand = currentBetHand;
      this.currentBetRound = currentBetRound;
    }

    this.buttons = buttons(); // actions, startTurnButton
    {
      this.actions = actions(); // fold, check, call, raise
      {
        this.fold = fold();
        this.check = check(); // checkAvail, checkNotAvail
        {
          this.checkAvail = checkAvail;
          this.checkNotAvail = checkNotAvail;
        }
        this.call = call(); // callAvail, callNotAvail
        {
          this.callAvail = callAvail;
          this.callNotAvail = callNotAvail;
        }
        this.raise = raise(modify, verify); // modify, verify
        {
          this.modify = modify(); // increase, decrease
          {
            this.increase = increase;
            this.decrease = decrease;
          }
          this.verify = verify(); // confirm, cancel
          {
            this.confirm = confirm;
            this.cancel = cancel;
          }
        }
      }
      this.startTurnButton = startTurnButton();
    }
  }
}

// ICONS -----------------------------------------------------------
// playerIcon, progressBar  position, currentBetHand, currentBetRound

// playerIcon: text (name), text (bankAmount), animation (highLight)

// progressBar: icon (bankAmount), animation (progress)

// position: ICONS
//  dealer: icon, animation (move to player)
//  bigBlind: icon, animation (move to player)
//  smallBlind: icon, animation (move to player)

// currentBetHand: text (currentBetHand), animation (show/hide)

// currentBetRound: text (betSizeRound)

// BUTTONS -----------------------------------------------------------
// actions, startTurnButton

// actions: BUTTONS
//  fold: text, button, animation (show / hide)
//  check: IF
//      checkAvail: text, button, animation (show / hide)
//      or
//      checkNotAvail: icon, animation (show / hide)
//  call: IF
//      callAvail: text, button, animation (show / hide)
//      or
//      callNotAvail: icon, animation (show / hide)
//  raise: text, button, animation (show / hide)
//      modify: BUTTONS
//          increase: icon, button
//          AND
//          decrease: icon, button
//      AND
//      varify: BUTTONS
//          confirm: text, button, animation (show / hide)
//          AND
//          cancel: text, button, animation (show / hide)

//startTurnButton: text, button, animation (highLight)
