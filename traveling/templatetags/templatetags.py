from django import template
register = template.Library()

@register.simple_tag
def define(val=None):
    vals = 0
    if val == 4:
        vals == 1
    else:
        vals = int(val) + 1
    return vals

@register.simple_tag
def defcaunter(val=0):
    vals = int(val) + 1
    return vals
