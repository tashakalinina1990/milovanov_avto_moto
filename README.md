# Задание «HTML Academy. Акселератор»
## Проект «Avto-Moto»

Выполнил: [Никита Милованов](https://htmlacademy.ru/profile/id1478835)

---

[Просмотреть сайт на githunb pages](https://nickmiloff.github.io/milovanov_avto_moto/)

---

### Почему использовал `useReducer`, весто redux?
Так как в данном проекте, мы не берем данные с сервера и фактически нам не нужно реализовывать middleware, то было принято решение не использовать redux. Мы не тянем за собой библиотеку, только лишь из-за комментариев, что уменьщает размер конечного бандла. В случае, если в будушем, мы будем привязывать сервер, то нам не составит никакого труда поставить redux =)

### Почему после использования `useReducer`, было принято решение использовать `useState`?
Так как в получившемся редьюсере у нас по факту был только один экшн, то мы можем заменить `useReducer` на `useState`
