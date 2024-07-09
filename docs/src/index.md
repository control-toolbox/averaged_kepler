# The averaged Kepler problem

We consider the Hamiltonian

$
    H(r, \theta, p_r, p_\theta) = v p_\theta + \Vert p \Vert_{g}
$

where $v$ is a constant, $p = (p_r, p_\theta)$, and $\Vert \cdot \Vert_{g}$ is the norm induced by the metric

$
    g = \mathrm{d}r^2 + m_\lambda^2(r)\, \mathrm{d}\theta^2, \quad 
    m_\lambda^2(r) = \frac{\sin^2 r}{1 - \lambda \sin^2 r}
$

with $\lambda = 4/5$.

Along the geodesics, we have $H+p^0 = 0$. The parameter $p^0$ is constant equal to $-1$ (hyperbolic), $0$ (abnormal) or $1$ (elliptic).

**Remark.** We can parameterize the geodesics by the norm of the initial convector, setting $\Vert{p_0}\Vert_g = 1$. 
This amounts to parameterize by the initial angle $\alpha_0$:
$$
    p_r = \sin \alpha_0, \quad p_\theta = m_\lambda(r) \cos \alpha_0.
$$
In that case, the hyperbolic geodeics are given by
$$
    p_\theta\, v + 1 = v\, m_\lambda(r) \cos \alpha_0 + 1 > 0.  
$$