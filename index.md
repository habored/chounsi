---
layout: default
---
<details class="card">
    <summary><h2>1. Checkpoint <span class="right">🧰</span></h2></summary>
    <p>Agents du numérique,</p>
    <p>Vérifiez que vous avez :<br>
    <input type='checkbox'> 1 PC <br>
    <input type='checkbox'> 1 Micro:bit + câble<br>
    <input type='checkbox'> Des enveloppes avec fiche + QR
    </p>
</details>
<section class="card" id="enigmes">
  <h2>2. Les énigmes <span class="right">🔓</span></h2>
  <menu>
    <button class="enigme-btn" data-target="binaire" title="1">&#127032;</button>
    <button class="enigme-btn" data-target="python" title="2">💻</button>
    <button class="enigme-btn" data-target="microbit" title="3">&#9000;</button>
    <button class="enigme-btn" data-target="final" title="4">***</button>
  </menu>
</section>

<section class="card enigme hidden" id="binaire">
  <h2>Énigme 1 — Diagnostic<span class="right">&#127032;</span></h2>
  <p>Avez-vous déchiffré le message ?</p>
  <input type="text" />
    <p class="feedback muted"></p>
  <button class="back-btn">⬅ Retour</button>
</section>

<section class="card enigme hidden" id="python">
  <h2>Énigme 2 — Exploration<span class="right">💻</span></h2>
  <p>Qu'affiche le programme ?</p>
  <input type="text" />
    <p class="feedback muted"></p>
  <button class="back-btn">⬅ Retour</button>
</section>

<section class="card enigme hidden" id="microbit">
  <h2>Énigme 3 — Test<span class="right">&#9000;</span></h2>
  <p>La lettre qui défile dans la console est la clé à entrer ci‑dessous.</p>
  <input type="text" />
    <p class="feedback muted"></p>
  <button class="back-btn">⬅ Retour</button>
</section>

<section class="card enigme hidden" id="final">
  <h2>Énigme 4 — Rétablissement<span class="right">***</span></h2>
  <p>Entrez vos réponses pour débloquer la suite.</p>
  <input type="text" />
    <p class="feedback muted"></p>
  <button class="back-btn">⬅ Retour</button>
</section>

{% include teamname.html %}
<script src="{{ site.baseurl }}/assets/js/sounds.js"></script>
<script src="{{ site.baseurl }}/assets/js/timer.js"></script>
<script src="{{ site.baseurl }}/assets/js/teamName.js"></script>
<script src="{{ site.baseurl }}/assets/js/enigmesDisplay.js"></script>
<script src="{{ site.baseurl }}/assets/js/fl4g.js"></script>