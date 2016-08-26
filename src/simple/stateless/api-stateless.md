## DDM-Selecty Stateless API

### Properties

<table width="100%">
	<tr>
		<th valign="top" colspan="5" align="left"><a href="#props" name="props">Properties</a></th>
	</tr>
	<tr>
		<th valign="top" width="120px" align="center">Property</th>
		<th valign="top" width="120px" align="center">Default Value</th>
		<th valign="top" width="120px" align="center">Type</th>
		<th valign="top" align="left">Description</th>
	</tr>
  <tr>
    <td valign="top"><code>autofocus</code></td>
    <td valign="top" align="center">false</td>
    <td valign="top" align="center">bool</td>
    <td valign="top">
      A boolean value to specify if the input should automatically
      get focus when the page loads.
    </td>
  </tr>
	<tr>
    <td valign="top"><code>autoHighlight</code></td>
    <td valign="top" align="center">false</td>
    <td valign="top" align="center">bool</td>
    <td valign="top">
      A boolean value to specify if the first option should be highlighted by
            default, once the user begins to type text into the input element.
    </td>
  </tr>
  <tr>
    <td valign="top"><code>disabled</code></td>
    <td valign="top" align="center">false</td>
    <td valign="top" align="center">bool</td>
    <td valign="top">
      A boolean value to specify if the input is
      disabled.
    </td>
	</tr>
	<tr>
    <td valign="top"><code>filterable</code></td>
    <td valign="top" align="center">true</td>
    <td valign="top" align="center">bool</td>
    <td valign="top">
      A boolean value to specify if options list should be filtered as the
            user types into the input.
    </td>
	</tr>
  <tr>
    <td valign="top"><code>items</code></td>
    <td valign="top" align="center">{}</td>
    <td valign="top" align="center">object</td>
    <td valign="top">An array of selected values.</td>
  </tr>
	<tr>
		<td valign="top"><code>label</code></td>
    <td valign="top" align="center">"label"</td>
    <td valign="top" align="center">string</td>
		<td valign="top">
			Specifies the <code>key</code> to use as the displayed field in option list. for
			example using <code>id</code> would display <code>197</code> in the option list for the
			object <code>{id: 197, value: painter, description: someone who paints}</code>
		</td>
	</tr>
  <tr>
		<td valign="top"><code>name</code></td>
    <td valign="top" align="center">selecty</td>
    <td valign="top" align="center">string</td>
		<td valign="top">Specifies the name of the input element.</td>
	</tr>
	<tr>
		<td valign="top"><code>noResults</code></td>
    <td valign="top" align="center">{show: true, label: 'No results found.'}</td>
    <td valign="top" align="center">object</td>
		<td valign="top">Used to hide, show, and change the output when there aren't any results found.</td>
	</tr>
  <tr>
		<td valign="top"><code>optionGroups</code></td>
    <td valign="top" align="center">[]</td>
    <td valign="top" align="center">array (array of objects)</td>
		<td valign="top">
      An array containing objects used for groups in suggestions
      <code>
      [{
          order: 0,
          value: 'some string value',
          name: 'string name'
      }]
      </code>
    </td>
	</tr>
  <tr>
		<td valign="top"><code>options</code></td>
    <td valign="top" align="center">[]</td>
    <td valign="top" align="center">array (array of objects)</td>
		<td valign="top">
      An array containing objects used for suggested items in the dropdown.
    </td>
	</tr>
  <tr>
    <td valign="top"><code>placeholder</code></td>
    <td valign="top" align="center">""</td>
    <td valign="top" align="center">string</td>
    <td valign="top">The text to display as the input's placeholder</td>
  </tr>
  <tr>
    <td valign="top"><code>required</code></td>
    <td valign="top" align="center">false</td>
    <td valign="top" align="center">bool</td>
    <td valign="top">
      Specifies that the input field must be filled out before
      submitting the form.
    </td>
  </tr>
	<tr>
		<td valign="top"><code>sortable</code></td>
    <td valign="top" width="100px" align="center">false</td>
    <td valign="top" width="100px" align="center">bool</td>
		<td valign="top">
      A boolean value to specify if options list should be sorted.
    </td>
	</tr>
	<tr>
		<td valign="top"><code>tabIndex</code></td>
    <td valign="top" width="100px" align="center">1</td>
    <td valign="top" width="100px" align="center">number, string</td>
		<td valign="top">
      An integer that will be assigned to the input element to allow tabbing in
			specific order for form elements.
    </td>
	</tr>
	<tr>
		<td valign="top"><code>typedValue</code></td>
    <td valign="top" width="100px" align="center">""</td>
    <td valign="top" width="100px" align="center">string</td>
		<td valign="top">
      The specific value used in populating the input element.
      If empty/null then it will default back to the placeholder property.
    </td>
	</tr>
  <tr>
    <td valign="top"><code>value</code></td>
    <td valign="top" width="100px" align="center">""</td>
    <td valign="top" width="100px" align="center">string</td>
    <td valign="top">
      The specific value used in populating the input element.
      If empty/null then it will default back to the placeholder property.
    </td>
  </tr>
  <tr>
    <td valign="top"><code>visible</code></td>
    <td valign="top" align="center">false</td>
    <td valign="top" align="center">bool</td>
    <td valign="top">
      Dropdown is visible or hidden.
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
		<td valign="top"><code>onKeyDown</code></td>
		<td valign="top">
      Callback function triggered when any key is pressed down. We also pass back the filtered options. <br/>
      <code>({ originalEvent :: e, array: filterOptions }) { }</code>
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
