import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";

// Étape 1 : créer un context "React" basique
const InfosContext = createContext();

// Étape 2 : créer le provider de mon context
export function InfoProvider({ children }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo({
      userId: 0,
      videoId: 0,
      userPseudo: "",
    });
  }, []);

  // /!\ ÉTAPE INTERMEDIAIRE /!\ j'utilise useMemo sinon
  // eslint me casse les pieds pour mon commit intermédiaire
  // bon et sinon pour de vrai : dans un cadre de context, le useEffect
  // va être appellé de multiples fois (et donc, malgrés le [] dans useEffect)
  // et donc le motorcycles va changer plein de fois, un comportement qui ne
  // match pas avec la logique de React
  const contextValue = useMemo(() => {
    return { info };
  }, [info]);

  return (
    <InfosContext.Provider value={contextValue}>
      {children}
    </InfosContext.Provider>
  );
}

// Étape 3 : créer un hook pour récupérer les valeurs du context depuis
// n'importe quel composant dans l'application
export const useInfosContext = () => useContext(InfosContext);

InfoProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
