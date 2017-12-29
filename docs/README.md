### Comment ça marche ?

Saisissez une `date`  
Une date à `date + 21 jours` sera alors calculée

**Exception:**

Si la `date + 21 jours` est un samedi ou un dimanche  
Alors la date calculée sera le lundi suivant

### Calcul

<datepicker>
<input type="text" ng-model="vm.initialDate">
</datepicker>

<pre>{{ vm.initialDate }}</pre>
