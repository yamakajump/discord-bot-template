/**
 * Gestionnaire de l'événement "ready".
 *
 * Ce module est déclenché une seule fois lorsque le bot est connecté et prêt.
 * Il affiche un message de confirmation dans la console.
 */

module.exports = {
  name: "ready",
  once: true,
  /**
   * Méthode exécutée lors du déclenchement de l'événement "ready".
   *
   * @param {Client} client - L'instance du bot Discord.
   */
  async execute(client) {
    console.log(`
  \x1b[38;5;39m ██████╗  ██████╗ ████████╗    ████████╗███████╗███╗   ███╗██████╗ ██╗      █████╗ ████████╗███████╗
  \x1b[38;5;33m ██╔══██╗██╔═══██╗╚══██╔══╝    ╚══██╔══╝██╔════╝████╗ ████║██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔════╝
  \x1b[38;5;27m ██████╔╝██║   ██║   ██║          ██║   █████╗  ██╔████╔██║██████╔╝██║     ███████║   ██║   █████╗  
  \x1b[38;5;21m ██╔══██╗██║   ██║   ██║          ██║   ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██╔══██║   ██║   ██╔══╝  
  \x1b[38;5;15m ██████╔╝╚██████╔╝   ██║          ██║   ███████╗██║ ╚═╝ ██║██║     ███████╗██║  ██║   ██║   ███████╗
  \x1b[38;5;15m ╚═════╝  ╚═════╝    ╚═╝          ╚═╝   ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝\x1b[0m
                                    Template Discord Bot - Prêt à être personnalisé !
`);

    console.log(
      `\x1b[0m🚀  Le bot est prêt ! Connecté en tant que \x1b[38;5;45m${client.user.tag}\x1b[0m (\x1b[38;5;45m${client.user.id}\x1b[0m)`,
    );

    console.log(
      `\x1b[38;5;2m📊  Statistiques :\x1b[0m`,
    );
    console.log(
      `   • Serveurs : \x1b[38;5;45m${client.guilds.cache.size}\x1b[0m`,
    );
    console.log(
      `   • Utilisateurs : \x1b[38;5;45m${client.users.cache.size}\x1b[0m`,
    );
    console.log(
      `   • Commandes chargées : \x1b[38;5;45m${client.commands?.size || 0}\x1b[0m`,
    );

    // Optionnel : définir le statut du bot
    client.user.setActivity("les commandes | /help", { type: "WATCHING" });
  },
};
