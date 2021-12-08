# Eksamen Kryssplattform

## Introduksjon til oppgaven

Jeg har laget en app men Rick And Morty APIet - https://rickandmortyapi.com/

I appen finnes det tre hovedsider hvor du kan se mer om karakterene i serien, alle steder, samt en side med innstillinger

### Funksjonell flyt

- Du vil først bli bedt om å logge inn med brukernavn
- Etter du har logget inn får du opp en liste med alle karakterer fra Rick and Morty universet
  - Her har du mulighet til å filtrere etter navn
- Om du trykker på "Read More" vil du komme til en detalj side om valgt karakter

  - Her listes det også ut alle episoder som den karakteren er med i

- På Tab Navigatoren kan du bytte til "Locations" hvor det kommer en liste med alle steder som finnes i serien

  - Her kan du på samme måte få opp detaljer om hvert sted samt karakterer som finnes på det stedet

- Til slutt er det en Settings tab
  - Her kan du se brukernavnet du har valgte på første side
  - Du har mulighet til å laste opp et profilbilde fra kamerarullen på enheten din
  - Du kan også logge ut
    - Når du logger ut blir det spillt av en spenstig lyd (dette fungerer dog ikke på simulator har jeg funnet ut, kun når du scanner QR kode på telefonen din)

## Hvordan kjøre programmet

- Last ned Zip filen og kjøre `npm i` for å intallere nødvendige node_modules
- Kjør `expo start` for å sette i gang expo
- Skriv så `i` for å kjøre applikasjonen i iPhone og `a` for å kjøre i android

## Refleksjoner

Jeg har laget så mange komponenter som jeg har klart å få til. Det er nok noen komponenter som burde vært laget generiske, som for eksempel "CharacterDetailsButton" i tillegg burde jeg ha laget generiske "list" og "listItem" komponenter, men dette fikk jeg dessverre ikke tid til.

Jeg har valgt å ha all styling i tilhørende filer. Også plattformspesifikk styling med `Platform.select`

Jeg har strukturert slik at alle filer ligger i tilhørende mapper, så man lett får oversikt over hvilke componenter som hører sammen, alle types ligger sammen osv.

Neste gang ville jeg laget en plan for hvordan applikasjonen skulle sett ut og hva slags funksjonalitet som skal være med før jeg startet å kode. Det tok lang tid å surre rundt og teste alle mulige ting og tang før jeg landet på noe. Dette spiste opp mye dyrebar tid som jeg kunne brukt på å få til mer.
