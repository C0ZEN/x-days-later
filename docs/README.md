## Choisir le nombre de jours

<column class="x-days">
    <label class="x-days-label"
           for="x-days-input">
        Choisissez un nombre de jours:
    </label>
    <input class="x-days-input"
           type="number" 
           ng-model="vm.data.xDays" 
           id="x-days-input" 
           name="x-days-input"
           tabindex="0"
           min="1"
           ng-change="vm.methods.onDaysInputChange()">
</column>

## Choisir une date

<column class="initial-date">
    <label class="initial-date-label"
           for="initialDate">
        Choisissez une date:
    </label>
    <datepicker class="initial-date-datepicker"
                date-set="{% raw %}{{vm.data.today}}{% endraw %}"
                date-format="EEEE dd MMMM yyyy"
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
                ng-mouseenter="vm.data.isHoverDatepicker = true"
                ng-mouseleave="vm.data.isHoverDatepicker = false">
        <input class="initial-date-input"
               ng-class="{selected: vm.data.showDatepicker}"
               type="text" 
               ng-model="vm.initialDate" 
               id="initialDate" 
               name="initialDate"
               tabindex="0"
               onfocus="this.blur()"
               on-enter="vm.methods.onDatepickerEnter()"
               ng-focus="vm.methods.onDatepickerFocus($event)"
               ng-change="vm.methods.onInitialDateChange()">
    </datepicker>
</column>

## Résultat

<column class="calculated-date">
    <span class="calculated-date-label">
        Date calculée à {% raw %}{{ vm.data.xDays }}{% endraw %} jours ouvrés:
    </span>
    <row>
        <date class="calculated-date-value-container">
            <value class="calculated-date-value">{% raw %}{{ vm.calculatedDate | date:'EEEE dd MMMM yyyy' }}{% endraw %}</value>
        </date>
        <copy-btn ngclipboard 
                  data-clipboard-target=".calculated-date-value"
                  ngclipboard-success="vm.methods.onCopySuccess()">
            <svg viewBox="0 0 50 50">
                <g>
                    <path d="M 15 0 C 13.90625 0 13 0.90625 13 2 L 6 2 C 4.347656 2 3 3.347656 3 5 L 3 41 C 3 42.652344 4.347656 44 6 44 L 21 44 L 21 42 L 23 42 L 23 44 L 36 44 C 37.652344 44 39 42.652344 39 41 L 39 16 L 37 16 L 37 14 L 39 14 L 39 5 C 39 3.347656 37.652344 2 36 2 L 29 2 C 29 0.90625 28.09375 0 27 0 Z M 15 2 L 27 2 L 27 5 C 27 5.566406 26.566406 6 26 6 L 16 6 C 15.433594 6 15 5.566406 15 5 Z M 21 14 L 23 14 L 23 16 L 21 16 Z M 25 14 L 27 14 L 27 16 L 25 16 Z M 29 14 L 31 14 L 31 16 L 29 16 Z M 33 14 L 35 14 L 35 16 L 33 16 Z M 41 14 L 41 16 L 43 16 L 43 14 Z M 45 14 L 45 16 L 47 16 L 47 14 Z M 21 18 L 23 18 L 23 20 L 21 20 Z M 45 18 L 45 20 L 47 20 L 47 18 Z M 21 22 L 23 22 L 23 24 L 21 24 Z M 45 22 L 45 24 L 47 24 L 47 22 Z M 21 26 L 23 26 L 23 28 L 21 28 Z M 45 26 L 45 28 L 47 28 L 47 26 Z M 21 30 L 23 30 L 23 32 L 21 32 Z M 45 30 L 45 32 L 47 32 L 47 30 Z M 21 34 L 23 34 L 23 36 L 21 36 Z M 45 34 L 45 36 L 47 36 L 47 34 Z M 21 38 L 23 38 L 23 40 L 21 40 Z M 45 38 L 45 40 L 47 40 L 47 38 Z M 45 42 L 45 44 L 47 44 L 47 42 Z M 21 46 L 21 48 L 23 48 L 23 46 Z M 25 46 L 25 48 L 27 48 L 27 46 Z M 29 46 L 29 48 L 31 48 L 31 46 Z M 33 46 L 33 48 L 35 48 L 35 46 Z M 37 46 L 37 48 L 39 48 L 39 46 Z M 41 46 L 41 48 L 43 48 L 43 46 Z M 45 46 L 45 48 L 47 48 L 47 46 Z "></path>
                </g>
            </svg>
        </copy-btn>
    </row>
</column>

<h3 ng-if="vm.data.history"
    id="détails">
    Détails
</h3>

<p ng-if="vm.data.history">
    <row>
        <span>La date sélectionnée est le <strong>{% raw %}{{ vm.data.history.original.date | date:'EEEE dd MMMM yyyy' }}{% endraw %}</strong>.</span>
    </row>
    <row>
        <span>La date calculée à {% raw %}{{ vm.data.xDays }}{% endraw %} jours ouvrés est le <strong>{% raw %}{{ vm.data.history.calculated.date | date:'EEEE dd MMMM yyyy' }}{% endraw %}</strong>.</span>
    </row>
    <br>
    <row ng-if="!vm.data.history.exception">
        <span>Aucune exception détectée.</span>
    </row>
    <row ng-if="vm.data.history.exceptionTriggered === 1">
        <span><strong>1</strong> exception détectée.</span>
    </row>
    <row ng-if="vm.data.history.exceptionTriggered > 1">
        <span><strong>{% raw %}{{ vm.data.history.exceptionTriggered }}{% endraw %}</strong> exceptions détectées.</span>
    </row>
</p>

<error class="with-animation"
       ng-if="vm.data.history && vm.data.history.exception"
       ng-repeat="exception in vm.data.history.exceptionList track by $index"
       ng-switch="exception.type"
       ng-style="{'animation-delay': ($index * 100 + 'ms')}">
    <span ng-switch-when="weekend">
    	<quantity>+ 2</quantity>
    	<strong>Weekend du {% raw %}{{ exception.sunday | date:'EEEE dd MMMM yyyy' }}{% endraw %}</strong>
    </span>
    <span ng-switch-when="ferie">
    	<quantity>+ 1</quantity>
    	<strong>{% raw %}{{ exception.ferie }}{% endraw %}</strong></span>
</error>

## Comment ça marche ?

Choisissez un `nombre de jours`.  
Choisissez une `date`.  
Une date à `date + nombre de jours` sera alors calculée.  
Elle prendra compte des jours ouvrés.

### Exceptions

<neutral>
    <row>
        <span>Si la <code>date + {% raw %}{{ vm.data.xDays }}{% endraw %} jours</code> est un samedi ou un dimanche,</span>
    </row>  
    <row>
        <span>Alors la date calculée sera le lundi suivant et le jour ne sera pas comptabilisé.</span>
    </row>  
</neutral>

<neutral>
    <row>
        <span>Si la date calculée est un jour férié,</span>
    </row>  
    <row>
        <span>Alors la date calculée sera le jour suivant non férié et le jour ne sera pas comptabilisé.</span>
    </row>  
</neutral>
