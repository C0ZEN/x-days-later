## Calcul

<column class="initial-date">
    <label class="initial-date-label"
           for="initialDate">
        Choisissez une date:
    </label>
    <datepicker class="initial-date-datepicker"
                date-format="longDate"
                date-week-start-day="1"
                date-typer="false"
                button-prev="<svg viewBox='0 0 50 50'><g><path d='M 34.960938 2.980469 C 34.441406 2.996094 33.949219 3.214844 33.585938 3.585938 L 13.585938 23.585938 C 12.804688 24.367188 12.804688 25.632813 13.585938 26.414063 L 33.585938 46.414063 C 34.085938 46.9375 34.832031 47.148438 35.535156 46.964844 C 36.234375 46.78125 36.78125 46.234375 36.964844 45.535156 C 37.148438 44.832031 36.9375 44.085938 36.414063 43.585938 L 17.828125 25 L 36.414063 6.414063 C 37.003906 5.839844 37.183594 4.960938 36.863281 4.199219 C 36.539063 3.441406 35.785156 2.957031 34.960938 2.980469 Z '></path></g></svg>"
                button-next="<svg viewBox='0 0 50 50'><g><path d='M 14.980469 2.980469 C 14.164063 2.980469 13.433594 3.476563 13.128906 4.230469 C 12.820313 4.984375 13.003906 5.847656 13.585938 6.414063 L 32.171875 25 L 13.585938 43.585938 C 13.0625 44.085938 12.851563 44.832031 13.035156 45.535156 C 13.21875 46.234375 13.765625 46.78125 14.464844 46.964844 C 15.167969 47.148438 15.914063 46.9375 16.414063 46.414063 L 36.414063 26.414063 C 37.195313 25.632813 37.195313 24.367188 36.414063 23.585938 L 16.414063 3.585938 C 16.035156 3.199219 15.519531 2.980469 14.980469 2.980469 Z '></path></g></svg>"
                button-prev-title="Précédent"
                button-next-title="Suivant"
                date-month-title="Mois sélectionné"
                date-year-title="Année sélectionnée"
                datepicker-toggle="false"
                datepicker-show="{% raw %}{{vm.data.showDatepicker}}{% endraw %}"
                ng-click="vm.methods.onDatepickerClick($event)">
        <input class="initial-date-input"
               type="text" 
               ng-model="vm.initialDate" 
               id="initialDate" 
               name="initialDate"
               tabindex="-1"
               ng-disabled="true">
    </datepicker>
</column>

<row>
    <message ng-show="vm.data.initialDateError">
        {% raw %}{{ vm.data.initialDateError | json }}{% endraw %}
    </message>
</row>

<column class="calculated-date">
    <span class="calculated-date-label">
        Date calculée à 21 jours:
    </span>
    <date class="calculated-date-value">
        {% raw %}{{ vm.calculatedDate | date:'longDate' }}{% endraw %}
    </date>
</column>

<pre>{% raw %}{{ vm.data }}{% endraw %}</pre>
<pre>{% raw %}{{ vm.initialDate }}{% endraw %}</pre>

## Comment ça marche ?

Saisissez une `date`.  
Une date à `date + 21 jours` sera alors calculée.

### Exceptions

> Si la `date + 21 jours` est un samedi ou un dimanche,  
> Alors la date calculée sera le lundi suivant.

> Si la date calculée est un jour férié,  
> Alors la date calculée sera le jour suivant non férié.

