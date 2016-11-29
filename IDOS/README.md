# Spojení z IDOSu do Google Kalendáře
Skript přidá do výpisu spojení z IDOSu vedle odkazu „Přidat do kalendáře“ nový odkaz „Přidat do Google Kalendáře“. Spoje do Google Kalendáře je pak možné přidávat rovnou (není nutné ukládat `iCal` soubor na disk a importovat do kalendáře ručně).

V konfiguraci skriptu je možné zvolit, který kalendář bude předvybrán (pokud máte Google Kalendářů víc). Postup nastavení:

## Tampermonkey
1. Zjistěte ID Google Kalendáře, který chcete použít:
   * Přejděte do [Google Kalendáře](https://www.google.com/calendar/).
   * V seznamu kalendářů pod *Moje kalendáře* nebo *Jiné kalendáře* vyhledejte požadovaný kalendář.
   * Klikněte na rozbalovací meu kalendáře (šipka vpravo od názvu).
   * Zvolte *Nastavení kalendáře*
   * V části *Adresa kelandáře* najdete **ID Kalendáře**. ID je shodné s vaší e-mailovou adresou, pokud použijete primární kalendář, nebo má tvar `xxxxxxxxxxxx@group.calendar.google.com`.
   * Nezáleží na tom, zda je kalendář označený jako veřejný nebo není. Skript nepřistupuje přímo do kalendáře, pouze vytvoří šablonu, n azákladě které si rychle vytvoříte událost v kalendáři sami.
1. Přejděte na stránku, kde se skript aktivuje (vyhledejte spojení v IDOSu).
1. U ikony Tampermonkey se zobrazí číslo označující počet aktivních skriptů.
1. Klikněte na ikonu Tampermonkey a zvolte volbu „Zvolit uživatelský adresář“.
1. Zadejte ID Google Kalendáře, které jste zjistili výše.
