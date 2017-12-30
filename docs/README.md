## Calcul

<row>
    <label for="initialDate">
        Choisissez une date
    </label>
    <datepicker date-set="{{ vm.data.today }}"
                date-week-start-day="1"
                date-typer="true">
        <input type="text" 
               ng-model="vm.initialDate" 
               id="initialDate" 
               name="initialDate">
    </datepicker>
</row>
<row>
    <message ng-show="vm.data.initialDateError">
        {{ vm.data.initialDateError }}
    </message>
</row>

<pre>{{ vm.initialDate | angular }}</pre>
<pre>{{ vm.data | angular }}</pre>
<pre>{{ 'vm.data' | angular }}</pre>
<pre>{{ vm.data }}</pre>
<pre>{{ 'vm.data' }}</pre>

## Comment ça marche ?

Saisissez une `date`.  
Une date à `date + 21 jours` sera alors calculée.

### Exceptions

> Si la `date + 21 jours` est un samedi ou un dimanche,  
> Alors la date calculée sera le lundi suivant.

> Si la date calculée est un jour férié,  
> Alors la date calculée sera le jour suivant non férié.

