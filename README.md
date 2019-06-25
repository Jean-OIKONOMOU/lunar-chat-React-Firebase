# Lunar-Chat
Voila mon premier site crée avec React et Firebase !

# Qui a fait le projet :
Exclusivement moi, avec l'aide de la documentation de Firebase.

# Qu’est-ce que c’est ?
Ceci est mon premier projet avec React ET Firebase! Je l'ai appelé Lunar-Chat. Il m'a pris environ un mois à finir. Il m'a principalement servi à améliorer mes connaissances tout en m'amusant. Le plus important pour moi a été la manipulation d'objet avec Javascript et les fonctions de Firebase (orderByChild, onAuthStateChanged,...)

# Quand as-tu bossé dessus ?
Du vendredi 31/5/2019 au 17/6/2019, mais c'est toujours en cours !

# A quoi ça ressemble ?
On peut créer sa room de chat, envoyer des messages en temps réel, s'inscrire avec un email. Il y a quelques problèmes à régler (comme le fait qu'il faut rafraîchir à la première connexion pour voir les rooms et les messages).

# La progression…
Ce n'est pas encore une PWA. Je dois encore le transformer en PWA avec des alertes (smartphone) quand il y a un nouveau message. Mais, d'abord, je dois mettre en place le scrolling automatique vers le bas de la conversation quand il y a un nouveau message. 
Réparer les bugs où, parfois, on doit rafraichir la page pour afficher certaines données. Ajouter des emojis, le drag n drop de fichiers dans le chat. Enlever le bug où deux personnes peuvent se connecter en même temps avec le même identifiant. Enfin, il faut rajouter l'option de mettre en place un mot de passe pour la room qu'on crée (optionel) et un mot de passe (obligatoire) pour effacer une room (avec en plus un mot de passe admin qui peut effacer n'importe quelle room).

# Mise à jour du 25/6/2019
- On ne voit plus le bouton pour se déconnecter quand on n'est pas encore connecté.
- On ne voit pas le formulaire pour créer une room quand on n'est pas connecté.
- Plus besoin de rafraîchir la page pour pouvoir écrire des messages lors de la première connexion.
- Plus besoin d'appuyer sur "login instead" après s'être inscrit, on est directement apporté sur le chat lui-même.