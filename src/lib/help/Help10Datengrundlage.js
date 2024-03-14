import React, { useContext } from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";
import LicenseLBK from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="datengrundlage"
      sectionTitle="Datengrundlagen"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Starkregengefahrenkarte Hürth stellt wahlweise die Maximalwerte
            oder den zeitlichen Verlauf von Wassertiefen oder
            Fließgeschwindigkeiten dar, die im Verlauf von simulierten
            Starkregenereignissen auftreten. Dazu wird ein Raster mit einer
            Kantenlänge von 1 m benutzt. Die Wassertiefen und
            Fließgeschwindigkeiten werden jeweils mit einem Farbverlauf
            visualisiert. Der Farbverlauf für die <strong>Wassertiefen</strong>{" "}
            benutzt die Eckwerte 20 cm (hellblau), 40 cm (blau), 75 cm
            (dunkelblau) und 100 cm (violett). Wassertiefen unter 10 cm werden
            nicht farbig ausgeprägt (transparente Darstellung). Zur
            Visualisierung der <strong>Fließgeschwindigkeiten</strong>,
            angegeben in Meter pro Sekunde (m/s), werden die Eckwerte 0,1 m/s
            (gelb), 0,3 m/s (orange), 0,5 m/s (hellrot) und 1 m/s (dunkelrot)
            verwendet. Der untere Grenzwert für die farbige Anzeige einer
            Fließgeschwindigkeit liegt bei 0,5 m/s. Die Simulationsberechnungen
            wurden im Auftrag der Stadt Hürth und der Hürther Stadtwerke
            (Stadtwerke Hürth AöR) durch das IngenieurbüroSweco GmbH
            durchgeführt. Der Regenwasserabfluss im Kanalnetz und durch Überstau
            aus dem Kanalnetz. austretendes Wasser wurden hierbei vereinfacht
            berücksichtigt, ebenso die unterschiedlichen
            Abflussgeschwindigkeiten auf Oberflächen mit unterschiedlicher
            Rauhigkeit (z. B. auf einer Straße schneller als auf einer Wiese).
            Die Informationen zur Oberflächenbeschaffenheit stammen dabei zum
            größten Teil aus dem Versiegelungsdaten-Informationssystem VerDIS
            der Stadtverwaltung Hürth.
          </p>

          <p>
            Die Simulationen basieren auf dem Digitalen Geländemodell (DGM) von
            Hürth, abgeleitet aus flächenhaften Höhenmessungen, die das Land NRW
            turnusmäßig mit einem Laserscanner aus einem Flugzeug heraus
            durchführt (verwendeter Datenstand überwiegend Anfang 2015). Das DGM
            wurde um die Gebäude aus dem Hürther Liegenschaftskataster und
            verrohrte Gewässerabschnitte aus der Kanalnetzdatenbank der WSW
            Energie &amp; Wasser AG sowie weitere Durchlässe ergänzt, um eine
            hydrologisch korrekte Abflussberechnung zu gewährleisten. Ab Version
            2.1 wird die Wupper mit einem unendlichen Fassungsvermögen für das
            zufließende Regenwasser modelliert. Es kann in den Simulationen nun
            also nicht mehr zu einem Rückstau kommen, bei dem das Regenwasser
            Flächen in der Talsohle überflutet, weil es von der Wupper nicht
            mehr abgeleitet werden kann. Die Überflutungen, die durch hohe
            Pegelstände entlang der Wupper und einiger wichtiger Zuflüsse der
            Wupper entstehen können, werden in den Hochwassergefahrenkarten des
            Landes NRW dargestellt. Die Stadt Hürth wird den hieraus für Hürth
            relevanten Ausschnitt in einer interaktiven "Hochwassergefahrenkarte
            Hürth" nach dem Vorbild der Starkregengefahrenkarte bereitstellen
            und beide Kartenanwendungen so miteinander koppeln, dass man die
            Gefahr durch beide Szenarien - Starkregen und Flusshochwasser - gut
            beurteilen kann.{" "}
            <strong>
              Bei kleineren Gewässern wie dem Mirker Bach wird die Überlagerung
              der Überflutungen durch ablaufendes Regenwasser und über die Ufer
              tretendes Gewässer in der Starkregengefahrenkarte abgebildet. Bei
              der Wupper, einem Gewässer mit einem großen hydrologischen
              Einzugsgebiet überwiegend außerhalb des Hürther Stadtgebietes, ist
              das nicht gegeben. Die Gefahr einer Überflutung durch die über die
              Ufer tretende Wupper sollte daher nur anhand einer
              Hochwassergefahrenkarte beurteilt werden.
            </strong>{" "}
            Weitere Verbesserungen in Version 2.1 der Simulationsberechnungen
            betreffen die Beseitigung einzelner kleinräumiger Fehler im
            Geländemodell, die Nutzer*innen jederzeit interaktiv melden können.
          </p>

          <p>
            Darüber hinaus ist das Ergebnis der Simulation natürlich von der
            Dauer und Intensität des Regens abhängig, der für die Simulation
            angenommen wird. Wir bieten Ihnen hierzu vier unterschiedliche{" "}
            <a onClick={() => setAppMenuActiveMenuSection("szenarien")}>
              simulierte Szenarien
            </a>{" "}
            an, drei "Modellregen" sowie das anhand der Niederschlagsmessungen
            desselben Tages nachgestellte Starkregenereignis vom 29.05.2018.{" "}
          </p>

          <p>
            Zur Betrachtung der Wassertiefen stellen wir Ihnen drei verschiedene
            Hintergrundkarten bereit, die auf den folgenden Geodatendiensten und
            Geodaten basieren:
          </p>

          <ul>
            <li>
              <strong>Basiskarte (grau)</strong>: Kartendienst (vektorbasiert)
              des BKG. <strong>basemap.de Web Vektor grau</strong>. Der
              Kartendienst basemap.de Web Vektor ist ein von Bund und Ländern
              gemeinsam entwickelter Kartendienst für Web und Mobil. Die
              deutschlandweite Karte wird monatlich aktualisiert, ständig
              weiterentwickelt und bietet die Qualität und Homogenität amtlicher
              Geodaten. Als Webkarte ermöglicht der Dienst freies Zoomen von der
              Deutschlandübersicht bis zu flächendeckenden 3D-Gebäudemodellen
              und amtlichen Hausnummern in modernem Design. (
              <a
                target="_legal"
                href="https://sgx.geodatenzentrum.de/web_public/gdz/lizenz/deu/basemapde_web_dienste_lizenz.pdf"
              >
                Lizenz basemap.de Web-Dienste
              </a>
              )
            </li>
            <li>
              <strong>Basiskarte (bunt)</strong>: Kartendienst (vektorbasiert)
              des BKG. <strong>basemap.de Web Vektor Relief</strong>. Der
              Kartendienst basemap.de Web Vektor ist ein von Bund und Ländern
              gemeinsam entwickelter Kartendienst für Web und Mobil. Die
              deutschlandweite Karte wird monatlich aktualisiert, ständig
              weiterentwickelt und bietet die Qualität und Homogenität amtlicher
              Geodaten. Als Webkarte ermöglicht der Dienst freies Zoomen von der
              Deutschlandübersicht bis zu flächendeckenden 3D-Gebäudemodellen
              und amtlichen Hausnummern in modernem Design. (
              <a
                target="_legal"
                href="https://sgx.geodatenzentrum.de/web_public/gdz/lizenz/deu/basemapde_web_dienste_lizenz.pdf"
              >
                Lizenz basemap.de Web-Dienste
              </a>
              )
            </li>
            <li>
              <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) des Landes
              NRW. Datengrundlage:{" "}
              <strong>Digitale Orthophotos (DOP) des Landes NRW</strong>{" "}
              WMS-Dienst für farbige, digitale, georeferenzierte, lagegenaue,
              entzerrte Luftbilder des Landes NRW. (
              <a
                target="_legal"
                href="https://www.bezreg-koeln.nrw.de/geobasis-nrw/produkte-und-dienste/luftbild-und-satellitenbildinformationen/aktuelle-luftbild-und-0"
              >
                weitere Informationen
              </a>
              ). (2) Basiskarte (bunt) (siehe oben)
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
