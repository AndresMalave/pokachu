import { useState } from "react";
import { Box, Button, ButtonBase, Typography } from "@mui/material";
import "normalize.css";

// Local
import { CardAttack } from "./components/CardAttack";
import { HpBar } from "./components/HpBar";
import { Players } from "./components/Players";
import TurnIndicator from "./components/TurnIndicator";

import { ataqueRapido, escudoRoca, revitalizar } from "./consts/Cards";
import {
  startHpEnemy,
  startHpPlayer,
  startShieldEnemy,
  startShieldPlayer,
} from "./consts/InitialData";
import {
  StyledActionBar,
  StyledContainer,
  StyledNotification,
} from "./styled-components/Background";

function App() {
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(false);
  const [winnerText, setWinnerText] = useState("");
  const [playerHp, setPlayerHp] = useState(startHpPlayer);
  const [playerShield, setPlayerShield] = useState(startShieldPlayer);
  const [enemyHp, setEnemyHp] = useState(startHpEnemy);
  const [enemyShield, setEnemyShield] = useState(startShieldEnemy);

  const handleTurn = () => {
    setTurn(!turn);
  };

  const resetGame = () => {
    setPlayerHp(startHpPlayer);
    setPlayerShield(startShieldPlayer);
    setEnemyHp(startHpEnemy);
    setEnemyShield(startShieldEnemy);
    setWinner(!winner);
    setTurn(true);
  };

  const damageCalculator = (damage) => {
    if (turn == true ? enemyShield > 1 : playerShield > 1) {
      const damageShield =
        turn == true ? enemyShield - damage : playerShield - damage;
      if (damageShield < 1) {
        turn == true
          ? (setEnemyShield(0),
            setEnemyHp(enemyHp + damageShield),
            damage > enemyHp + enemyShield
              ? (setEnemyHp(0),
                setWinner(!winner),
                setWinnerText("El ganador es el jugador 1"))
              : setEnemyHp(enemyHp + damageShield))
          : (setPlayerShield(0),
            setPlayerHp(playerHp + damageShield),
            damage > playerHp + playerShield
              ? (setPlayerHp(0),
                setWinner(!winner),
                setWinnerText("El ganador es el jugador 1"))
              : setPlayerHp(playerHp + damageShield));
      } else {
        turn == true
          ? setEnemyShield(damageShield)
          : setPlayerShield(damageShield);
      }
    } else {
      const damageReceived =
        turn == true ? enemyHp - damage : playerHp - damage;
      turn == true
        ? enemyHp - damage < 0
          ? (setEnemyHp(0),
            setWinner(!winner),
            setWinnerText("El ganador es el jugador 1"))
          : setEnemyHp(damageReceived)
        : playerHp - damage < 0
        ? (setPlayerHp(0),
          setWinner(!winner),
          setWinnerText("El ganador es el jugador 2"))
        : setPlayerHp(damageReceived);
    }
  };

  const shieldCalculator = (shield) => {
    const shieldReceived =
      turn == true ? playerShield + shield : enemyShield + shield;
    turn == true
      ? setPlayerShield(shieldReceived)
      : setEnemyShield(shieldReceived);
  };

  const healCalculator = (heal) => {
    const healing = turn == true ? playerHp + heal : enemyHp + heal;
    turn == true
      ? playerHp + heal > 100
        ? setPlayerHp(100)
        : setPlayerHp(healing)
      : enemyHp + heal > 100
      ? setEnemyHp(100)
      : setEnemyHp(healing);
  };

  const turnLoop = (damage, shield, heal) => {
    if (turn == true) {
      handleTurn();
      damageCalculator(damage);
      shieldCalculator(shield);
      healCalculator(heal);
    } else {
      handleTurn();
      damageCalculator(damage);
      shieldCalculator(shield);
      healCalculator(heal);
    }
  };

  return (
    <>
      <StyledContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 15,
            width: "100%",
          }}
        >
          <Box sx={{ paddingX: 5 }}>
            {turn == true && <TurnIndicator />}
            <HpBar
              color={"primary"}
              value={playerHp}
              hp={playerHp}
              shield={playerShield}
            />
            <Players
              rotate={-1}
              img={
                "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-bulbasaur/pokemon-bulbasaur-doodle.gif"
              }
            />
          </Box>

          {winner == true && (
            <StyledNotification>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                gap={7}
              >
                <Typography variant="h3">{winnerText}</Typography>
                <Button variant="contained" onClick={() => resetGame()}>
                  Reinicar
                </Button>
              </Box>
            </StyledNotification>
          )}

          <Box sx={{ paddingX: 5 }}>
            {turn == false && <TurnIndicator />}
            <HpBar
              color={"error"}
              value={enemyHp}
              hp={enemyHp}
              shield={enemyShield}
            />
            <Players
              rotate={1}
              img={
                "https://64.media.tumblr.com/70294ea5458856ba706a953a9e00d4f0/tumblr_o2k5bpQ6BQ1qivz7no1_1280.gif"
              }
            />
          </Box>
        </Box>

        <StyledActionBar>
          <ButtonBase
            onClick={() =>
              turnLoop(
                ataqueRapido.damage,
                ataqueRapido.shield,
                ataqueRapido.heal
              )
            }
            disabled={winner == true}
            sx={{ height: "100%" }}
          >
            <CardAttack
              name={ataqueRapido.name}
              damage={ataqueRapido.damage}
              shield={ataqueRapido.shield}
              heal={ataqueRapido.heal}
            />
          </ButtonBase>

          <ButtonBase
            onClick={() =>
              turnLoop(escudoRoca.damage, escudoRoca.shield, escudoRoca.heal)
            }
            disabled={winner == true}
            sx={{ height: "100%" }}
          >
            <CardAttack
              name={escudoRoca.name}
              damage={escudoRoca.damage}
              shield={escudoRoca.shield}
              heal={escudoRoca.heal}
            />
          </ButtonBase>

          <ButtonBase
            onClick={() =>
              turnLoop(revitalizar.damage, revitalizar.shield, revitalizar.heal)
            }
            disabled={winner == true}
            sx={{ height: "100%" }}
          >
            <CardAttack
              name={revitalizar.name}
              damage={revitalizar.damage}
              shield={revitalizar.shield}
              heal={revitalizar.heal}
            />
          </ButtonBase>
        </StyledActionBar>
      </StyledContainer>
    </>
  );
}

export default App;
