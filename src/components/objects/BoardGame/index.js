import './style.css'
import CardGame from "/src/components/CardGame/index"

function BoardGame(amountCards) {
    // const amountCards = 6
    const $htmlCardGame = CardGame()
    const $htmlContent = $htmlCardGame.repeat(amountCards)

    return `
        <section class="board-game">
        ${$htmlContent}
        </section>
  `;
}

export default BoardGame