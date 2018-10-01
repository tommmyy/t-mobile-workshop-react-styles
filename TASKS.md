# Formuláře

```
git checkout forms
```

1. Přidej do `Form` další pole:
	- Input pro "Email"
	- Textarea pro "Message"
	- Checkbox pro "Terms of conditions"
	- Select pro výběr "Favorite programming language" (možnosti jsou na tobě)

2. Přidej tlačítko "Reset", které nastaví hodnoty ve formuláři na výchozí

3. Zaobal jednotlivé formulářové prvky do vlastních komponent:
	- `input[type=text]` - `TextField`
	- `textarea` - `TextAreaField`
	- `input[type=checkbox]` - `CheckBox`

	Tyto komponenty by měli přijmat i property `id` a `label`.

4. Pokus se refaktorovat formulář tak, abys nemusel mít pokaždé vlastní `onChange` handler.

# styled-components

```
git checkout styled-components
```

5. Podle https://www.styled-components.com/docs/advanced#theming přiden `ThemeProvider` a veškeré barvy ulož do témy.

6. V komponentě `Tab` použij psedoselector `:hover`: https://www.styled-components.com/docs/basics#psuedoelements-psuedoselectors-and-nesting

7. Popřemýšlej jak v komponentě `Tab` by šel použít tag `css` pro refactor