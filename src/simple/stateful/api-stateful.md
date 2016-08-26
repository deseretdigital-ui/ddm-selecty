## DDM-Selecty Statelful API


The Stateful version of the component has all of the properties of the
stateless version. It also has a couple of additional ones, that should make
its use simpler for general use cases. For example the stateful component will
save the input value onto the component's state, allowing it's setup to be greatly reduced. Please see the examples folder for a comparison between the two. Also note that some behaviors of the below properties and methods are
different in their implementation, compared to the stateless version.

### Properties

<table width="100%">
	<tr>
		<th valign="top" colspan="3" align="left"><a href="#props" name="props">Properties</a></th>
	</tr>
	<tr>
		<th valign="top" width="120px" align="left">Property</th>
		<th valign="top" align="left">Description</th>
	</tr>
  <tr>
    <td valign="top"><code>autofocus</code></td>
    <td valign="top">
      A boolean value to specify if the input should automatically
      get focus when the page loads.
    </td>
  </tr>
	<tr>
    <td valign="top"><code>autoHighlight</code></td>
    <td valign="top">
      A boolean value to specify if the first option should be highlighted by
			default, once the user begins to type text into the input element.
    </td>
  </tr>
	<tr>
    <td valign="top"><code>autoSuggest</code></td>
    <td valign="top">
      A boolean value to specify if the suggestions dropdown should be opened when the component gains focus, but the user hasn't entered any text yet. 
    </td>
  </tr>
	<tr>
		<td valign="top"><code>delimiters</code></td>
		<td valign="top">
      An array of character keycodes that will select the currently highlighted
			item and fire the onSelected method.
    </td>
	</tr>
  <tr>
		<td valign="top"><code>disabled</code></td>
		<td valign="top">
      A boolean value to specify if the input is
      disabled.
    </td>
	</tr>
	<tr>
		<td valign="top"><code>filterable</code></td>
		<td valign="top">
      A boolean value to specify if options list should be filtered as the
			user types into the input.
    </td>
	</tr>
  <tr>
		<td valign="top"><code>items</code></td>
		<td valign="top">An array for the initially selected values.</td>
	</tr>
	<tr>
		<td valign="top"><code>label</code></td>
		<td valign="top">
			Specifies the <code>key</code> to use as the displayed field in option list. for
			example using <code>id</code> would display <code>197</code> in the option list for the
			object <code>{id: 197, value: painter, description: someone who paints}</code>
		</td>
	</tr>
  <tr>
		<td valign="top"><code>name</code></td>
		<td valign="top">Specifies the name of the input element.</td>
	</tr>
  <tr>
		<td valign="top"><code>options</code></td>
		<td valign="top">
      An array containing objects used for suggested items in the dropdown.
    </td>
	</tr>
  <tr>
    <td valign="top"><code>placeholder</code></td>
    <td valign="top">The text to display as the input's placeholder</td>
  </tr>
  <tr>
    <td valign="top"><code>required</code></td>
    <td valign="top">
      Specifies that the input field must be filled out before
      submitting the form.
    </td>
  </tr>
	<tr>
		<td valign="top"><code>sortable</code></td>
		<td valign="top">
      A boolean value to specify if options list should be sorted.
    </td>
	</tr>
	<tr>
		<td valign="top"><code>tabIndex</code></td>
		<td valign="top">
      An integer that will be assigned to the input element to allow tabbing in
			specific order for form elements.
    </td>
	</tr>
  <tr>
    <td valign="top"><code>value</code></td>
    <td valign="top">
      The specific value the input element will have displayed initially.
      If empty/null then it will default back to the placeholder property.
    </td>
  </tr>
</table>

### Methods

<table width="100%">
  <tr>
    <th valign="top" colspan="3" align="left"><a href="#methods" name="props">Methods</a></th>
  </tr>
  <tr>
		<th valign="top" width="120px" align="left">Method</th>
		<th valign="top" align="left">Description</th>
	</tr>  
	<tr>
		<td valign="top"><code>onBlur</code></td>
		<td valign="top">
      Callback function triggered when the selecty component loses focus and
      becomes blurred. <br/>
      <code>({ }) { }</code>
    </td>
	</tr>
	<tr>
		<td valign="top"><code>onChange</code></td>
		<td valign="top">
			Callback function triggered when input's value changes. <br/>
			<code>({ originalEvent :: e }) { }</code>
		</td>
	</tr>
	<tr>
		<td valign="top"><code>onClicked</code></td>
		<td valign="top">
      Callback function triggered when item is clicked. <br/>
      <code>({ value :: Item }) { }</code>
    </td>
	</tr>
	<tr>
		<td valign="top"><code>onFilter</code></td>
		<td valign="top">
      Function used to reduce the options list based on the original option list,
			the input value, and the label used on the item object. Returning the reduced
			options array.<br/>
			<code>({ string: label, string :: inputText, array :: options }) { return array; }</code>
    </td>
	</tr>

  <tr>
		<td valign="top"><code>onFocus</code></td>
		<td valign="top">
      Callback function triggered when the selecty component gains focus. <br/>
      <code>({ }) { }</code>
    </td>
	</tr>
	<tr>
		<td valign="top"><code>onItemSelected</code></td>
		<td valign="top">
      Callback function triggered when the item is selected by either
			clicking or using the keyboard. <br/>
      <code>({ }) { }</code>
    </td>
	</tr>
  <tr>
		<td valign="top"><code>onKeyDown</code></td>
		<td valign="top">
			Callback function triggered when any key is pressed down. We also pass back the filtered options. <br/>
			<code>({ originalEvent :: e, array: filterOptions }) { }</code>
    </td>
	</tr>
	<tr>
		<td valign="top"><code>onLoad</code></td>
		<td valign="top">
      Function used for loading data from an async process. When completed it
			should call the callback method that's passed in as a parameter. <br/>
      <code>({ function :: callback }) { }</code>
    </td>
	</tr>
	<tr>
		<td valign="top"><code>onOptionsFiltered</code></td>
		<td valign="top">
      Callback function used to return the filtered list of the options.<br/>
      <code>({ array :: results }) { }</code>
    </td>
	</tr>
	<tr>
		<td valign="top"><code>onSelected</code></td>
		<td valign="top">
			Callback function triggered when item is selected via a keyboard event. <br/>
			<code>({ value :: Item }) { }</code>
    </td>
	</tr>
</table>
