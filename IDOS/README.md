# Spojení z IDOSu do Google Kalendáře
Skript přidá do výpisu spojení z IDOSu vedle odkazu „Přidat do kalendáře“ nový odkaz „Přidat do Google Kalendáře“. Spoje do Google Kalendáře je pak možné přidávat rovnou (není nutné ukládat `iCal` soubor na disk a importovat do kalendáře ručně).

## Volba výchozího kalendáře

V konfiguraci skriptu je možné zvolit, který kalendář bude předvybrán (pokud máte Google Kalendářů víc). Pro nastavení kalendáře nejprve musíte zjistit ID kalendáře:

### Zjištění ID kalendáře
1. Přejděte do [Google Kalendáře](https://www.google.com/calendar/).
1. V seznamu kalendářů pod *Moje kalendáře* nebo *Jiné kalendáře* vyhledejte požadovaný kalendář.
1. Klikněte na rozbalovací meu kalendáře (šipka vpravo od názvu).
1. Zvolte *Nastavení kalendáře*
1.V části *Adresa kelandáře* najdete **ID Kalendáře**. ID je shodné s vaší e-mailovou adresou, pokud použijete primární kalendář, nebo má tvar `xxxxxxxxxxxx@group.calendar.google.com`.
Skript nezíská žádná oprávnění pro práci s kalendářem a nezáleží na tom, zda je kalendář označený jako veřejný nebo není. Skript nepřistupuje přímo do vašeho kalendáře, pouze vám otevře šablonu události, ve které jsou vyplněné všechny potřebné údaje – takže stačí šablonu pouze uložit.

### Tampermonkey
1. Přejděte na stránku spojení, kde se skript aktivuje – např. http://jizdnirady.idnes.cz/vlakyautobusy/spojeni/.
1. U ikony Tampermonkey v prohlížeči se zobrazí číslo označující počet aktivních skriptů.
1. Klikněte na ikonu Tampermonkey a zvolte volbu „Zvolit uživatelský kalendář“.
1. Zadejte ID Google Kalendáře, které jste zjistili výše.

### Greasemonkey
1. Přejděte na stránku spojení, kde se skript aktivuje – např. http://jizdnirady.idnes.cz/vlakyautobusy/spojeni/.
1. Klikněte na rozbalovací menu u ikony Greasemonkey v prohlížeči, zvolte „Příkazy uživatelských skriptů…“ a dále „Zvolit uživatelský kalendář“.
1. Zadejte ID Google Kalendáře, které jste zjistili výše.
