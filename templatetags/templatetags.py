from django import template
register = template.Library()

@register.simple_tag
def define(val=0):
    vals = int(val) + 1
    return vals
