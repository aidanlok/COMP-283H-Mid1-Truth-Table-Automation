/**
 * @customfunction
 */
function existsW_existsX_hAndV(W, X) {
  return generalizedQuantifier(W, X, exists, exists, and);
}

/**
 * @customfunction
 */
function existsW_existsX_hImpliesV(W, X) {
  return generalizedQuantifier(W, X, exists, exists, implies);
}

/**
 * @customfunction
 */
function existsW_forallX_hAndV(W, X) {
  return generalizedQuantifier(W, X, exists, forall, and);
}

/**
 * @customfunction
 */
function existsW_forallX_hImpliesV(W, X) {
  return generalizedQuantifier(W, X, exists, forall, implies);
}

/**
 * @customfunction
 */
function forallW_existsX_hAndV(W, X) {
  return generalizedQuantifier(W, X, forall, exists, and);
}

/**
 * @customfunction
 */
function forallW_existsX_hImpliesV(W, X) {
  return generalizedQuantifier(W, X, forall, exists, implies);
}

/**
 * @customfunction
 */
function forallW_forallX_hAndV(W, X) {
  return generalizedQuantifier(W, X, forall, forall, and);
}

/**
 * @customfunction
 */
function forallW_forallX_hImpliesV(W, X) {
  return generalizedQuantifier(W, X, forall, forall, implies);
}
